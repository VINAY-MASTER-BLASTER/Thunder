const customer = {
    name:"Viany",
    age : 21,
    value : 70,
    city : "Noida",
    Array : [10,20,30],
    address : {
        State : "New Delhi",
        picode : 110027
    }
}
// Object destructuring 
// Rename 
// try find the same valid field 
// const {age:ageName,value:valueName} = customer
// console.log(ageName,valueName)  


// Create a Copy // spread operator
// const customer2 = {...customer}
// customer2.name = "Rohit" 
// customer and customer2 object point two diffrent Object 
// customer2.address.picode = 110050
// customer2.Array.push(100)
// console.log(customer)
// Primative Datatype - customer and customer2 object point diffrent Object with new Address 
// Non-Primative Datatype - customer and customer2 object point same Address Object 
// nested Object 


// Total Spread copy need
// const customer2 = structuredClone(customer)
// customer2.address.State = 'Mumbai'
// customer2.Array.push(50)
// console.log(customer)

// Could you use it - no 


// for in loop - iteration
// for(key in customer){
//     console.log(key,customer[key])
// }
// don't use this method it is not recommended  