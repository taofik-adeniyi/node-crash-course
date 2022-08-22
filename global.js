//nodejs globals object similar to window object from a browser
// Global Object

console.log(global);

global.setTimeout(function () {
  console.log(" in the timeout");
  clearInterval(int);
}, 3000);

let int = setInterval(function () {
  console.log("every 1 seconds");
}, 1000);


console.log(__dirname);
console.log(__filename);