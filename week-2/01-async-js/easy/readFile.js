const fs = require("fs");

const filepath = "week-2/01-async-js/easy/read.txt";
fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});