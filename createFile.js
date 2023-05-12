const { writeFileSync, readFileSync } = require("fs");

writeFileSync("welcome.txt", "hello Node", "utf-8");
const data = readFileSync("hello.txt");
console.log(data.toString());
