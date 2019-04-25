const path = require("path");
const express = require("express");

// console.log("---", "dirname", path.join(__dirname, "./public/index.html"));
// console.log("---", "filename", __filename);

const app = express();

const publicDirPath = path.join(__dirname, "./public");

app.use(express.static(publicDirPath));

app.listen(3000, () => {
  console.log("listening to port 3000");
});
