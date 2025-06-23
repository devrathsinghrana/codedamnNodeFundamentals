const fs = require("fs");
const { createFile, readFileSynchronously, readDirectory } = require("./utils");
(async () => {
  await createFile("newFile.txt", "This is the content of the new file.");
  readFileSynchronously("newFile.txt");
  //   below two read directories synchronously
  readDirectory("./")
  console.log(fs.readdirSync("./"));
})();
