/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const port = 3000;
const path = require("path");
const app = express();

let filespath = path.join(__dirname, "files");
app.get('/files',  (req, res) => {
    fs.readdir(filespath, (err,files)=>{
      if(err){
        console.error(err);
        res.status(500).send("Internal server error");
      }else{
        res.status(200).send(files);
      }
    })// sync method returns file name array, doesn't take any callback, but blocks event loop, not recommended for scalability. So use readdir which is async, useful for handling server errors.
});
app.get('/file/:filename', (req, res) => {
  let filename = req.params.filename;
  let filepath = path.join(filespath, filename);
  if (fs.existsSync(filepath)) {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).send(data);
      }
    })
  } else {
    res.status(404).send("File not found");
  }
});
app.use((req, res) => {
  res.status(404).send("Route not found");
});
app.use((err, req, res, next) => {
  res.status(500).send("Internal server error");
});

//app.listen(3000);
module.exports = app;
