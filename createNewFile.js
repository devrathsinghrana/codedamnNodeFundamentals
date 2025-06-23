const fs = require("fs");
const { createFile, readFileSynchronously, readDirectory } = require("./utils");
(async () => {
  await createFile("newFile.txt", "This is the content of the new file.");
  readFileSynchronously("newFile.txt");
  //   below two read directories synchronously
  readDirectory("./")
  fs.readdirSync("./", (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
    } else {
      console.log("Files in directory 2:", files);
    }
  });
})();
