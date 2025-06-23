/*
const addNumbers = (a, b) => a + b;

exports.b = 20;

exports = {
  c: 30,
};

module.exports.addNumbers = addNumbers;
module.exports = {
    ...module.exports,
    a: 10,
};

module.exports.d = 40;

Key Points
exports vs module.exports

In Node.js, exports is just a reference to module.exports at the start.
If you assign a new object to exports, it breaks the reference. Only module.exports is actually exported.
What gets exported?

Only the final value of module.exports is exported from the module.
Step-by-step Execution
exports.b = 20;

Adds b: 20 to both exports and module.exports (since they reference the same object at this point).
exports = { c: 30 };

Now, exports points to a new object { c: 30 }, but module.exports is unchanged.
module.exports.addNumbers = addNumbers;

Adds addNumbers to module.exports.
module.exports = { ...module.exports, a: 10 };

Creates a new object, copying all properties from the current module.exports and adding a: 10.
module.exports.d = 40;

Adds d: 40 to module.exports.
*/
const fs = require("fs");
const fsPromises = fs.promises;
// const fs = require("fs/promises"); // Alternative way to import fs promises API

const addNumbers = (a, b) => a + b;

const createFile = (fileName, fileContent) => {
  // we need to return it as a promise so that we can await it wherever we call this function
  return new Promise((resolve, reject) => {
    //writeFile is asynchronous so need to use callback here
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) return reject(err);
      console.log("file created successfully");
      resolve();
    });
  });
};

const readFileSynchronously = (fileName) => {
  // Using synchronous read
  console.log(fs.readFileSync(fileName, "utf-8"));
};

const readDirectory = async (dirPath) => {
  try {
    // Using promises to read directory asynchronously
    const files = await fsPromises.readdir(dirPath);
    console.log("Files in directory:", files);
  } catch (err) {
    console.error("Error reading directory:", err);
  }
};

module.exports = {
  addNumbers,
  createFile,
  readFileSynchronously,
  readDirectory,
  a: 10,
  b: 20,
  d: 40,
};
