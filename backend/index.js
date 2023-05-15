const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
const port = 3000;

app.post("/upload", upload.single("fileToUpload"), (req, res) => {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false,
    });
  } else {
    console.log("file received");
    return res.send({
      success: true,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
