const fs = require("fs");

const filepath = "week-2/01-async-js/easy/read.txt";

fs.appendFile(filepath,"hello js",(err,data) => {
    if(err) throw err;

})