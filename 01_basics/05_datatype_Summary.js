//#Primitive Datatype
// we have copy of the data and we change that copy 

// 7 types : String , Number , boolean , Null ,undefined , Symbol , BigInt

//---------> javascript dynamic type lang or static type lang?
/* const score = Symbol ('123');
const anotherId =Symbol('123'); */


//console .log(score ==anotherId);


//#Refrence (Non Primitive)

// memory m refrence directly allocate kiya ja sakta hai .

//Array , Object , Function



let userOne = {
    email:"user@gmail.com",  
    upi:"vishal@upi"
}

let userTwo = userOne;

userTwo.email = "vishal@google.com"

console.log(userOne.email);
console.log(userTwo.email);
