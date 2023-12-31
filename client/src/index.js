const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");


app.use("/stocked", express.static(path.join(__dirname + "/stocked")));

// setup multer for file upload

console.log(express.static)
///////// Clean up the temp directory
const temporaryFolder = "/stocked/temporary"; // Temporary folder path

const clearTemporaryFolder = () => {
  const files = fs.readdirSync(temporaryFolder);

  files.forEach((file) => {
    const filePath = path.join(temporaryFolder, file);
    const { ctime } = fs.statSync(filePath);
    const currentTime = new Date().getTime();
    const fileAge = currentTime - ctime;

    const timeLimit = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (fileAge > timeLimit) {
      fs.unlinkSync(filePath); // Delete the file
    }
  });
};

// Middleware to clear temporary folder
app.use((req, res, next) => {
  clearTemporaryFolder();
  next();
});
const temporaryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/stocked/temporary");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname
        .replace(/[^A-Za-z0-9.\s]/g, "")
        .replace(/\s/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .toLowerCase()
    );
  },
});

const storageThb = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/stocked/thumbnails");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname
        .replace(/[^A-Za-z0-9.\s]/g, "")
        .replace(/\s/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .toLowerCase()
    );
  },
});
// Handle file upload
const uploadthb = multer({ storage: storageThb });
// Create a multer instance with temporary storage
const upload = multer({ storage: temporaryStorage });

app.post("/upload", upload.array("file"), (req, res) => {
  const id = req.body.id;
  const fileRes = { id, ...req.files[0] };
  res.send(fileRes);
});

app.post("/uploadthb", uploadthb.array("file"), (req, res) => {
  const base = req.body.file.replace(/^data:image\/\w+;base64,/, '');

  // const actualBase64 = base.replace(/^data:image\/\w+;base64,/, '');;
  const imageBuffer = Buffer.from(base, "base64");
  const imageName = req.body.id.replace(/[:.]/g, '')
 
  const imagePath = "/stocked/thumbnails/" + imageName + ".png"; // Provide the appropriate path and filename
  fs.writeFileSync(imagePath, imageBuffer);
  const fileRes = imageBuffer;
  res.send(fileRes);
});

const folder = "./";
app.get("/stocked/", (req, res) => {
  const directoryPath = "/stocked/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      const absolutePath = path.resolve(folder, file);

      fileInfos.push({
        name: file,
        url: "/stocked/" + file,
        file: file,
      });
    });

    res.status(200).send(fileInfos);
  })})