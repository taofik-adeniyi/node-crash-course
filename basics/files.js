// reading files
// const fs = require('fs') //filesystem

// fs.readFile('./blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     // console.log(data.toString());
// })

// import { readFile } from 'node:fs';

// readFile('blog1.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require('fs');

// reading files
fs.readFile('../docs/books.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data);
});

// fs.readFileSync

// writing files


// directories


// deleting files