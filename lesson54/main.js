console.log("#54.1. Basic Buffer operations in Node.js");

const isDebugMode = () => {
  const nodeEnv = process.env.NODE_ENV;
  const isDebug = nodeEnv === "development";

  console.log("NODE_ENV:", nodeEnv);
  console.log("Debug mode:", isDebug);

  return isDebug;
};

const encodeToBase64 = (...args) => {
  try {
    const value = args.join(":");
    const encodedValue = Buffer.from(value, "utf8").toString("base64");

    console.log("Base64 encoded:", encodedValue);

    return encodedValue;
  } catch (error) {
    console.error("Base64 encoding error:", error);
    throw error;
  }
};

const encodeToHex = (...args) => {
  try {
    const value = args.join(":");
    const encodedValue = Buffer.from(value, "utf8").toString("hex");

    console.log("Hex encoded:", encodedValue);

    return encodedValue;
  } catch (error) {
    console.error("Hex encoding error:", error);
    throw error;
  }
};

const decodeFromBase64 = (base64String) => {
  try {
    const decodedValue = Buffer.from(base64String, "base64").toString("utf8");

    console.log("Base64 decoded:", decodedValue);

    return decodedValue;
  } catch (error) {
    console.error("Base64 decoding error:", error);
    throw error;
  }
};

const decodeFromHex = (hexString) => {
  try {
    const decodedValue = Buffer.from(hexString, "hex").toString("utf8");

    console.log("Hex decoded:", decodedValue);

    return decodedValue;
  } catch (error) {
    console.error("Hex decoding error:", error);
    throw error;
  }
};

const safeDecodeFromBase64 = (base64String) => {
  try {
    if (
      typeof base64String !== "string" ||
      base64String.length === 0 ||
      base64String.length % 4 !== 0 ||
      !/^[A-Za-z0-9+/]*={0,2}$/.test(base64String)
    ) {
      throw new Error("Invalid base64 string");
    }

    const decodedValue = Buffer.from(base64String, "base64").toString("utf8");

    const normalizedInput = base64String.replace(/=+$/, "");
    const normalizedEncodedValue = Buffer.from(decodedValue, "utf8")
      .toString("base64")
      .replace(/=+$/, "");

    if (normalizedInput !== normalizedEncodedValue) {
      throw new Error("Invalid base64 string");
    }

    console.log("Safe Base64 decoded:", decodedValue);

    return decodedValue;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const safeDecodeFromHex = (hexString) => {
  try {
    if (
      typeof hexString !== "string" ||
      hexString.length === 0 ||
      hexString.length % 2 !== 0 ||
      !/^[0-9a-fA-F]+$/.test(hexString)
    ) {
      throw new Error("Invalid hex string");
    }

    const decodedValue = Buffer.from(hexString, "hex").toString("utf8");

    console.log("Safe Hex decoded:", decodedValue);

    return decodedValue;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

isDebugMode();

const base64Encoded = encodeToBase64("john@email.com", "123", "extraData");
console.log("Base64 Encoded result:", base64Encoded);

const hexEncoded = encodeToHex("john@email.com", "123", "extraData");
console.log("Hex Encoded result:", hexEncoded);

const base64Decoded = decodeFromBase64(base64Encoded);
console.log("Base64 Decoded result:", base64Decoded);

const hexDecoded = decodeFromHex(hexEncoded);
console.log("Hex Decoded result:", hexDecoded);

const safeBase64Decoded = safeDecodeFromBase64(base64Encoded);
console.log("Safe Base64 Decoded result:", safeBase64Decoded);

const safeHexDecoded = safeDecodeFromHex(hexEncoded);
console.log("Safe Hex Decoded result:", safeHexDecoded);

try {
  safeDecodeFromBase64("invalid@@@");
} catch {
  console.log("Invalid Base64 was handled correctly.");
}

try {
  safeDecodeFromHex("invalid-hex");
} catch {
  console.log("Invalid Hex was handled correctly.");
}

export {
  isDebugMode,
  encodeToBase64,
  encodeToHex,
  decodeFromBase64,
  decodeFromHex,
  safeDecodeFromBase64,
  safeDecodeFromHex,
};
