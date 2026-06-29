// console.log("Hello World")

// let a = 10 
// a = 50



// let b = 19.3
// // String
// let fname = "Vinay"


// console.log(a)
// console.log(b)
// console.log(fname)


// const num = 30
// console.log(num)


// let a = 30 
// let b = a
// b = 70
// console.log(a,b)


// let a = 30

// 
// primative data type and non prinitive data type 
// primative data : number , string , Boolean, undefined ,null,Symbol,BigInt

// non prinitive data: object ,Array, Functions
// immutable 

// Number
let firstnumber = 20 
let secondnumber = 3.14

// String 
let Name = "VINAY"
let fName = 'Vikas'
let name = `Nitesh  ${firstnumber}`


// Boolean  
let firstBoolean = true
let secondBoolean = false


// undefined 
let a
console.log(a)

// null 
let value = null
console.log(null)


// BigInt
let big = 543594859480958495834095809348n
console.log(big)


// Symbol
let Symbol1 = Symbol("vinay")
let Symbol2 = Symbol("vinay")
// console.log(Symbol1==Symbol2) create unique value



// non prinitive data: object ,Array, Functions
// Array
let arr = [10,20,30,"Vinay",true,undefined,null,5.4];
console.log(typeof null)

// Object 
let person = {
    name : "Vinay",
    age : 21,
    city : "New Delhi"
}

let fn = function greet(){
    console.log(`Hello Vinay`)
}

let fn = function(){
    console.log('Hello World')
    return 10
}
console.log(fn())