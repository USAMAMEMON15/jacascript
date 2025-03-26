// object 
const obj  ={
    name : "faraz",
    email : "faraz@gmail.com",
    course : "js"
};

// First Method
console.log(obj["email"]);

// Second method
console.log(obj.name)
console.log(obj);

//update
obj["name"] = "jerry";
obj.course = "pst";

const result =Object.keys(obj);
console.log(result);

// let username = promt("enter your name ");
//console.log(username)

let gameNum = Math.floor(Math.random()*100);
console.log(gameNum);
let pointNum = prompt("enter your name");
while(gameNum !=pointNum){
    pointNum = prompt(`you guess the the wrong number gues again ${gameNum}`);

}
alert("you won the game")

//PASS BY VALUE PASS BY REFERENCE
const po ={
    name :"herry",
    age : 20,
    profile:{
        image :"https//",
        fullName:"JERRY",
        state:"us"
    }
};

function addValue (value,city ,country){
    value.city=city;
    value.profile.country=country
    value.profile.fullName="herry"
}
addValue(po,"karachi","pakistan")
console.log(po);
