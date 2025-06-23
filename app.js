const util = require("./utils");

(async () => {
  const { square } = await import("./module.mjs"); // Importing a named export from a module which exports in es6 as require is not supported for such exported files so this is a work around
  // const { square } = require("./module.mjs"); // This will not work as require does not support ES6 module syntax
  // const m2 = require("./module2.mjs"); // This will not work as require does not support ES6 module syntax
  // const { cube, pow4 } = m2; // This will not work as    require does not support ES6 module syntax  so this is a work around using dynamic imports
  
  console.log(util);
  console.log(square(2)); // 4
})();
