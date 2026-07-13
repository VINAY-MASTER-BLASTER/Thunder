// What is Function, why do we need 

// function greeting(){    //Function Create 
//     console.log('Hello world')
// }
// greeting() //function call


// function addNumber(num1,num2){ //Parameter 
    // console.log(num1+num2)
//     return num1 + num2
// }
// const sum = addNumber(10,45)//argument '
// console.log(sum)


// function addNumber(num1,num2,num3=0,num4=0  ){ //by defult 
    // console.log(num3) //undefined
    // return num1 + num2 + num3 + num4

// }
// console.log(addNumber(10,20)) //NaN
// console.log(addNumber(10,20,11,11))


// function addNumber(...rest){
    // let sum = 0
    // for(const i = 0; i<rest.length; i++){
    //     sum += rest[i]
    // }

    // for(const num of rest){
    //     sum += num
    // }
    // return sum
// }
// console.log(addNumber(34,43,4,10,5,2,5,12,32,64,63))
// rest Operator 
// Array -  [34,43,4,10,5,2,5,12,32,64,63] from Array



// Second Method to create a function 
// Function Expression 
// const greet = function(){
//     console.log("Hello Ji")
//     return 10 
// }
// const answer =greet()
// console.log(answer)
// function is actually a Object 
// When Every you call it 



// const addNumber = function(num1,num2){
//     return num1+num2
// }
// console.log(addNumber(20,45))



// third type se hum function ka banate : ye aapse jaada use karoga
// arrow function
// const greet = () =>{
//     console.log("Hello Coder Army")
// }
// greet()


// const addNumber = (num1,num2) => {
//     return num1 + num2
// }
// const sum = addNumber(34,50)
// console.log(sum)


// ShortHand - Implicit retune 
// function bhi nahi dikh rha hai 
// const addNumber = (num1,num2) => num1 + num2  //automatically retune

// console.log(addNumber(12,20))

// const answer = addNumber(23,32)
// console.log(answer)

// const square = num => num*num
// console.log(square(6))
// if your have only one parameter not need to add thses parentheses
// Whene you have only one parameter, no need to use ()
// backend Normal function 
// Code : Readabale 
// this function use so much in react 




// const user = () =>{
    // const obj = {
    //     name : "VInay",
    //     age : 21 
    // }
    // return obj

//     return {
//         name : "VInay",
//         age : 21
//     }
// }


const user = () => ({name:"VInay",age:21}) //React syntax
console.log(user())                                                                              