///ctrl + . == te hace la documentacion del codigo

//The line `const os = require("node:os");` is importing the built-in `os` module from Node.js. This module provides a set of methods and properties for interacting with the operating system.
import {
  platform,
  release,
  arch,
  cpus,
  totalmem,
  freemem,
  uptime,
} from "node:os";

console.log("Informacion del sistema operativo");
console.log("----------------------------------");

console.log("Nombre del sistema operativo", platform());

console.log("Versión del sistema operativo", release());

console.log("Arquitectura", arch());
console.log("CPUs", cpus());

console.log("Memoria total", totalmem() / 1024 / 1024);

console.log("Memoria libre", freemem() / 1024 / 1024);
console.log("uptime", uptime() / 60 / 60);
