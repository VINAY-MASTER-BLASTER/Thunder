// const arr1 = [10,20,30,40,50]
// const arr2 = arr1
// arr2[2] = 84
// console.log(arr1)


// 1 Dimension array 




// two Dimension array - array ke ander array 
// let arr = [[10,20,30],[40,50,60],[70,80,90],[100,110,120]]
// console.log(arr)
// console.log(arr[1])
// console.log(arr[2][0])

// two dimensional: arr.length: Number of rows kitni hai: number of one dimension array kitne hai
// console.log(arr.length)

// ja bahut sara one dimensional array ek sath aata hai tub two dimensional array bunta hai

// Loops
// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         console.log(arr[i][j])
//     }
// }
// console.log(arr[1].length) // fins the legnth 


// for(key of arr){
//     for(value of key){
//         console.log(value)
//     }
// }



// 3d :Array kya hota hai 
// let arr = [[10,20],[54,60,[25,50,75]]]
// console.log(arr[1][2][0])


// All work done by : 1D array , 2D array 



// const num1 = [10,20,30,40,50]
// const num2 = [42,41,67,43,53]
// const num3 = [101,102,103,104]
// const retune = num1.concat(num2,num3) //it's retune a new array 
// console.log(retune)


// same prople try to do this way (Wrong way)
// num1.push(num2,num3)
// console.log(num1)


// spread operator - importent 
// const num = [...num1,...num2,...num3]
// console.log(num) //spread operator it's not work on 2D Array


// How To Get array first and second value 
const num = [10,20,30,40,50]
// const first = num[0]
// const second = num[1]
// console.log(first,second)

// array destructuring - importent 
const [a,b,c,...remaining] = num
// remaining Array : rest operator (...) - importent 
console.log(a,b,c,remaining)


// Spread Operator - Expands (unpacks) elements.
// Rest Operator (...) - Gathers (collects) elements

// ...  ya too mai thoduga ya fir joduga 