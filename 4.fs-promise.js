const fs = require("node:fs/promises");
console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf8").then((text) => {
  console.log("primer texto: ", text);
});

console.log("------------> Hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf8").then((text) => {
  console.log("Segundo texto: ", text);
});
