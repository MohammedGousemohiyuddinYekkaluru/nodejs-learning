const fs = require("fs");

//WRITING
//sync...
fs.writeFileSync("./test.txt", "Hey There!");

//Async...
fs.writeFile("./test.txt", "hello from async", (err) => console.log(err));

//READING
//sync...
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result)

//Async
fs.readFile("./contacts.txt", "utf-8", (err, res) => {
    if(err){
        console.log("Error", err);
    } else{
        console.log(res)
    }
});

//APPENDING
fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`);