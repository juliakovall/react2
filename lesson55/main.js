console.log("#55. Asynchronous file operations in Node.js");

import { readFile, unlink, writeFile } from "node:fs/promises";

async function writeFileAsync(filename, content) {
  try {
    await writeFile(filename, content, "utf8");

    console.log("Файл успішно записано");
  } catch (error) {
    console.error("Помилка при записі файлу:", error);

    throw error;
  }
}

async function readFileAsync(filename) {
  try {
    const content = await readFile(filename, "utf8");

    console.log("Файл успішно прочитано:", content);

    return content;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.error("Файл не існує:", filename);
    } else {
      console.error("Помилка при читанні файлу:", error);
    }

    throw error;
  }
}

async function deleteFileAsync(filename) {
  try {
    await unlink(filename);

    console.log("Файл успішно видалено");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.error("Файл не існує:", filename);
    } else {
      console.error("Помилка при видаленні файлу:", error);
    }

    throw error;
  }
}

async function runExample() {
  const filename = "example.txt";
  const content = "Привіт, це тестовий файл!";

  try {
    await writeFileAsync(filename, content);

    const fileContent = await readFileAsync(filename);
    console.log("Прочитаний вміст:", fileContent);

    await deleteFileAsync(filename);
  } catch (error) {
    console.error("Помилка під час виконання прикладу:", error);
  }
}

runExample();

export { writeFileAsync, readFileAsync, deleteFileAsync };
