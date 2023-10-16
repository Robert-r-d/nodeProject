const fs = require("node:fs");

const stats = fs.statSync("./archivo.txt");

console.log(
  /* `stats.isFile()` is a method that checks if the given path refers to a file. It returns `true` if
  the path is a file, and `false` otherwise. */
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
);
