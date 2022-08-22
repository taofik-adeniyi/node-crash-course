// const abc = require('./people')
const { people } = require('./people')
//require runs the file require but you have no access to the contents of the file

// console.log(abc.people, abc.ages);
console.log(people);

const os = require('os')

console.log(os);
console.log(os.homedir(), os.platform());