const fs = require("fs");

//Sync..
// fs.writeFileSync("./text.txt","Hey Ansh"); 


//Async
// fs.writeFile("./text.txt","Hello I'm Ansh", (err) => {});



//sync
// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result);



//Async
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);  
//     }
// })

fs.appendFileSync("./text.txt",`${Date.now()} hey there\n`);

// fs.cpSync("./text.txt","./copy.txt");
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./text.txt"));
// fs.mkdirSync("my-docss/a/b",{recursive:true});