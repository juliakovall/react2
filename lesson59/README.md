# Lesson 59

## Description

This project demonstrates asynchronous file compression and decompression using the built-in Gzip algorithm in Node.js.

## Features

- Compress files using Gzip
- Decompress Gzip files
- Generate unique file names if a file already exists
- Handle file system errors
- Use Node.js Streams
- Use ES Modules

## Technologies

- JavaScript (ES Modules)
- Node.js
- Stream API
- Zlib

## Project Structure

```
lesson59/
│
├── files/
│   ├── source.txt
│   ├── source.txt.gz
│   └── source_decompressed.txt
│
├── main.js
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Run

```bash
npm start
```

## Functions

### compressFile(filePath)

Compresses the specified file using the Gzip algorithm and returns the path to the compressed file.

### decompressFile(compressedFilePath, destinationFilePath)

Decompresses a Gzip file and returns the path to the restored file.

## Example

Source file:

```
files/source.txt
```

After compression:

```
files/source.txt.gz
```

After decompression:

```
files/source_decompressed.txt
```

## Author

Julia Koval
