const fs = require("fs");
const { dirname } = require("path");

function fileCleaner(filepath){
    let cleanedData = '';
    fs.readFile(filepath,"utf-8",(err,data) => {
        if(err) throw err;
        cleanedData = data.replace(/\s/g,'');

        fs.writeFile(filepath,cleanedData,(err,data)=>{
            if(err) throw err;
            console.log("content updated");
        })
    })
}
const filepath = `week-2/01-async-js/medium/read.txt`;
fileCleaner(filepath);