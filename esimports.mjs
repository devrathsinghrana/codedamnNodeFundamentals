import * as m from "./module.mjs";
import defaultValue from "./module.mjs";

// we need .mjs extension for the import to work
// or set "type": "module" in package.json

console.log(m.square(2)); // 4
console.log(m.m2.cube(3)); // 27
console.log(m.m2.pow4(3)); // 81
console.log(defaultValue); // "default value"
