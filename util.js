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
const addNumbers = (a, b) => a + b;


// exports = {
//   c: 30,
// };

module.exports.addNumbers = addNumbers;
module.exports = {
//   ...module.exports,need to add this else above module.exports is overriden
  a: 10,
};
exports.b = 20;

module.exports.d = 40;
