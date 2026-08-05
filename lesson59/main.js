import { constants, createReadStream, createWriteStream } from "node:fs";
import { access } from "node:fs/promises";
import { parse, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { createGzip, createGunzip } from "node:zlib";

console.log("#59. JavaScript homework example file");

async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function getUniqueFilePath(filePath) {
  const parsedPath = parse(filePath);

  let resultPath = filePath;
  let counter = 1;

  while (await fileExists(resultPath)) {
    resultPath = resolve(
      parsedPath.dir,
      `${parsedPath.name}_${counter}${parsedPath.ext}`,
    );

    counter += 1;
  }

  return resultPath;
}

async function compressFile(filePath) {
  const sourcePath = resolve(filePath);
  const compressedPath = await getUniqueFilePath(`${sourcePath}.gz`);

  try {
    await pipeline(
      createReadStream(sourcePath),
      createGzip(),
      createWriteStream(compressedPath),
    );

    return compressedPath;
  } catch (error) {
    throw new Error(`Failed to compress file: ${error.message}`);
  }
}

async function decompressFile(compressedFilePath, destinationFilePath) {
  const sourcePath = resolve(compressedFilePath);
  const destinationPath = resolve(destinationFilePath);
  const uniqueDestinationPath = await getUniqueFilePath(destinationPath);

  try {
    await pipeline(
      createReadStream(sourcePath),
      createGunzip(),
      createWriteStream(uniqueDestinationPath),
    );

    return uniqueDestinationPath;
  } catch (error) {
    throw new Error(`Failed to decompress file: ${error.message}`);
  }
}

async function performCompressionAndDecompression() {
  try {
    const compressedResult = await compressFile("./files/source.txt");

    console.log("Compressed file:", compressedResult);

    const decompressedResult = await decompressFile(
      compressedResult,
      "./files/source_decompressed.txt",
    );

    console.log("Decompressed file:", decompressedResult);
  } catch (error) {
    console.error("Error during compression or decompression:", error.message);
  }
}

performCompressionAndDecompression();

export { compressFile, decompressFile };
