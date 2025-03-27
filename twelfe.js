//Approuch

//IMPERITIVE APPROUCH
//In imperitive approuch you can tell the computer what to do and how to do 

//DECLERATIVE APPROUCH
//In declerative approuch tou can tell the computer what to do and computer made the dicision how to do 


//Input =[1,2,,3,4,5,6]
//output =[2,4,,6,8,10,12]

//Imperitive approuch

let arr =[1,2,3,4,5,6]
let result =[];
for(let i=0; i<arr.length; i++){
    let elem =arr [i]*2
    result.push(elem);
}
console.log(result);

let myValue =arr.map((items)=>{
    return items*2
})
console.log(myValue);


// IN JS WE HAVE TWO TYPES OD MODULE
// CORE MODULE -> LIKE CONSOLE.LOG("")
// GLOBAL MODULE LIKE -> CUSTOM MODULE USE IMPORT FOR THE FUNCTION

// const { log } = require("console");
// const fs = require ("fs")
// fs.writeFileSync("one.html","Hyper text marker languath");

// console.log(process.argv)

const fs = require("fs")
let input =process.argv

if(input[2]=="add"){
    fs.writeFileSync(input[3],input[4])

}
else if (input[2]=="remove"){
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid ");
    
}


// CRUD 
//C -> create
//D -> DELETE
//R -> READ
//U -> UPDATE



const fs = require("fs")
fs.writeFileSync("tree.txt", "this is crud!")


fs.readFile("tree.txt", "utf-8", ((err, items) => {
    if (!err) {
        console.log(items)
    }


    else {
        console.log("error in your code!");

    }

}))


fs.appendFile("tree.txt", "which is perform by js!", ((err, items) => {

    if (!err) {
        console.log("your file has been updated!")
    }

    else {
        console.log("error in your code!");
    }

}))


fs.rename("tree.txt", "plant.css", ((err, items) => {

    if (!err) {
        console.log("your file name has been updated!")
    }

    else {
        console.log("error!")
    }

}))

fs.unlinksync(tree.txt)

