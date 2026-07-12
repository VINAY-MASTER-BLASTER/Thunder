// const user = {
//     name : "Vinay",
//     age : 20,
//     email : "Vinaytoppo145@gamil.com",
//     amount : "900Rs"
// }



// How to access the value 
// console.log(user.name)
// console.log(user.age)
// console.log(user["amount"])



// key ju hai vo String ki from ma store hoti hai 
// Internally 
// const user = {
//     "name" : "Vinay",
//     "age" : 20,
// }





// const user = {
//     name : "Vinay",
//     age : 20,
//     email : "Vinaytoppo145@gamil.com",
//     amount : "900Rs"
// }

// create a new key : value 
// user.aadhaar = 349490430943
// console.log(user)  // inside the user object if aadhaar did't find it create a new key and value pair

// Update the value inside the object 
// user.email = "Vikas2003@gmail.com"
// console.log(user) // inside the user object if the email find it so that key value  will updated 


// how to delete any filed || how to delete any key 
// delete user.email
// console.log(user)



// user = null
// delete user 
// console.log(user)
// garbage collector : Can I delete, should i delete it 



// Object inside method 
// const user = {
//     name : "Vinay",
//     age : 20,
//     email : "Vinaytoppo145@gamil.com",
//     amount : "900Rs",
//     greet : function(){ //methods 
//         console.log(`Hello Vinay`)
//     },
//     arr : [10,20,30,40,50,60],
//     address : {
//         city: "Noida",
//         pincode : 110028
//     }

// }
// user.greet() // call the function

// console.log(user.arr) //Array 

// object inside another object
// console.log(user.address.city) //access
// console.log(user.address.pincode)

// object give you create any thing you have full freedoum




const customer = {
    name : "viany",
    age  : 21,
    accountNumber : 459840984309589038,
    balance : 1000,
    city : "Noida"
}

// keys ko print karana hai 
// console.log(Object.keys(customer))
// [ 'name', 'age', 'accountNumber', 'balance', 'city' ] Array string fomata

// console.log(Object.values(customer))
// [ 'viany', 21, 459840984309589060, 1000, 'Noida' ]


// keys and value 
// console.log(Object.entries(customer))
// [
//   [ 'name', 'viany' ],
//   [ 'age', 21 ],
//   [ 'accountNumber', 459840984309589060 ],
//   [ 'balance', 1000 ],
//   [ 'city', 'Noida' ]
// ]
// 2d Array 


// mainually 
// const customerkeys = Object.keys(customer)
// console.log(customerkeys)
// for(const key of customerkeys){
//     console.log(key, customer[key]) //key - variable
// }
// Why we did't write customer.key - kyu ki ya customer object a ander ja kar key filed ko find karna ki koshish karaga aur underfined retune karaga

// key = one by one it's come 'name', 'age', 'accountNumber', 'balance', 'city'

// same thing but the diffrent syntax 
// if I have array, i can run for of loop  here 

// for(const key of Object.keys(customer)){
//     console.log(key, customer[key])
// }

// Value
// for(const key of Object.values(customer)){
//     console.log(key,)
// }

// key value both -
//  2d Array
// [[name','viany']['age',21],['accountNumber',459840984309589060],['balance',1000],['city','Noida']]

// [key,value] = ['name','viany']
// for(const [key,value] of Object.entries(customer)){
//     console.log(key,value)
// }

// here we are only show the object key we are just that  
// console.log(Object.keys(customer))
// but think like a situation where we have to show to selective keys to show to do using loop

// for of loop: Array apply hoat hai 

// for(const key in customer){
//     console.log(key, customer[key])  
// }




// Object Reference 
const obj1 = {name:"Vinay"}
const obj2 = obj1
obj2.name = "Viaks"
console.log(obj1)