import {
  createHash,
  pbkdf2Sync,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";

console.log("#58. JavaScript homework example file");

/**
 * Generates a SHA-256 hash from a string.
 *
 * @param {string} input - String to hash.
 * @returns {string} SHA-256 hash in hexadecimal format.
 *
 * @example
 * generateHash("Hello");
 */
function generateHash(input) {
  return createHash("sha256").update(input).digest("hex");
}

/**
 * Generates a secure password hash using PBKDF2.
 *
 * @param {string} password - Password to hash.
 * @param {string} salt - Salt.
 * @param {number} iterations - Number of iterations.
 * @param {number} keylen - Key length in bytes.
 * @param {string} digest - Hash algorithm.
 * @returns {string} Password hash.
 */
function generatePasswordHash(
  password,
  salt,
  iterations = 10000,
  keylen = 64,
  digest = "sha512",
) {
  return pbkdf2Sync(password, salt, iterations, keylen, digest).toString("hex");
}

/**
 * Verifies whether the password matches the stored hash.
 *
 * @param {string} inputPassword - User password.
 * @param {string} storedHash - Stored hash.
 * @param {string} salt - Salt.
 * @param {number} iterations - Number of iterations.
 * @param {number} keylen - Key length.
 * @param {string} digest - Hash algorithm.
 * @returns {boolean} True if password is correct.
 */
function verifyPassword(
  inputPassword,
  storedHash,
  salt,
  iterations = 10000,
  keylen = 64,
  digest = "sha512",
) {
  const inputHash = generatePasswordHash(
    inputPassword,
    salt,
    iterations,
    keylen,
    digest,
  );

  const inputBuffer = Buffer.from(inputHash, "hex");
  const storedBuffer = Buffer.from(storedHash, "hex");

  if (inputBuffer.length !== storedBuffer.length) {
    return false;
  }

  return timingSafeEqual(inputBuffer, storedBuffer);
}

// =========================
// Examples
// =========================

console.log("SHA-256:");
console.log(generateHash("Hello, World!"));

const password = "superSecret123";
const salt = randomBytes(16).toString("hex");

const hash = generatePasswordHash(password, salt);

console.log("\nSalt:");
console.log(salt);

console.log("\nPassword Hash:");
console.log(hash);

console.log("\nPassword Verification:");

console.log("Correct:", verifyPassword(password, hash, salt));

console.log("Wrong:", verifyPassword("wrongPassword", hash, salt));

export { generateHash, generatePasswordHash, verifyPassword };
