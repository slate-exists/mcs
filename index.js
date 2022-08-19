// Require dependencies
let fs = require("fs");
let path = require("path");

let inputPath = process.argv[2];
let outputPath = process.argv[3];

if (!inputPath) return console.log("Must provide input path");
// if (!outputPath) return console.log("Must provide output path");

let input = fs.readFileSync(inputPath).toString();

console.log(inputPath);
console.log(input);