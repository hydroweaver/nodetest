readline = require('readline');
fs = require('fs');

rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Name: ', (answer)=>{
    console.log('Your name is ', answer);
    rl.close();
    //fs.writeFileSync('c://Users//Hydro//Desktop//name.txt', answer);
    fs.writeFile('c://Users//Hydro//Desktop//name.txt', answer, (err)=>{
        if(err){
            console.log('Error');
        }
        else{
            console.log('File Written Successfully!')
        }
    })
});