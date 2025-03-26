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



