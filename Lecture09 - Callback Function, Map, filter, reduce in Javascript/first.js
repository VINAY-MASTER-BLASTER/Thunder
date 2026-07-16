// callback ki baare mein pada tha...
// function ka andar dusra function as a argument kar sakta hai...

// function add(num1,num2){
//     return num1 + num2
// }
// function sub(num1,num2){
//     return num1 - num2
// }
// function mul(num1,num2){
//     return num1 * num2
// }
// function calculator(callback,num1,num2){
//     console.log('I am doing Calculation')
//     const result = callback(num1,num2)
//     console.log(`your result ${result}`)

//     // return callback(num1,num2)
// }
// calculator(sub,10,40)
// calculator(add,10,40)

// // Same thing with Arrow Function
// calculator((num1,num2)=>{
//     return num1 / num2
// },10,2)

// // same thing with ES5 Function
// calculator(function(a,b){
//     return a / b
// },100,2)




// const arr = [10,20,30,44,11,34,21,45]
// arr.sort((a,b)=>a-b)
// console.log(arr)
// -ve don't swap and a  and b
// +ve swap it 





// Bubble Sort not understand
// const arr = [4, 1, 5, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//      if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);



// Custume sort function
const arr = [10, 20, 30, 44, 11, 34, 21, 45];

// Array is Object key value pair ma kaam karta hai
// const arr  = {
//     0: 10
//     1: 20
//     2: 30
//     3: 44
//     4: 11
//     5: 34
// }

// console.log(arr["0"]); //storing as a string

// Object ma kisi bhee property ko add kar sakta hu

// arr.sorting = function(){
//     const arr = [4, 1, 5, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//      if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// }
// arr.sorting()
// console.log(arr)