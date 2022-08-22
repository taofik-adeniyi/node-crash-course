// reading files
const fs = require('fs')

fs.readFile('./text.txt', (err, data)=>{
    if(err) throw err
    console.log(data.toString());
})

// writing files

fs.writeFile('./text.txt', 'lagbaja nothing for you ooo', ()=>{
    console.log('file 1 was written');
})

fs.writeFile('./text2.txt', ' my head ooo my belle ooo', ()=>{
    console.log('file 2 was written');
})

fs.writeFile('./docs/books1.txt', 'text three my head ooo my belle ooo', ()=>{
    console.log('file 3 was written into a directory');
})

fs.writeFile('./docs/books2.txt', 'Hallo', (err)=>{
console.log('book two written');  
})



// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
}else {
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}



// deleting files

// fs.rmSync('./assets', {recursive: true}, ()=>{
//     console.log('deleted folder with files');
// })

if(fs.existsSync('./docs/books3.txt')){
    fs.unlink('./docs/books3.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}

//Streams and Buffers


// Streams
// i.e large file