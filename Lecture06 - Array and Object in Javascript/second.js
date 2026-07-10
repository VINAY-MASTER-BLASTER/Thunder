// let user = [10,50,"vinay",true,{name:"vinay"},undefined,null] //hetoroganies type od data : it can be store anytype to data insode it
// other prorammbg language  -> homogenous 
// console.log(user)


// can i change the value inside the array 
// user[1] = 60
// console.log(user)


// methods 
// let num = [10,20,30,40,50,60]

// pust(Insert element in the array at the end) or pop(delete element from the end of array)
// num.push(30,40)
// console.log(num)

// num.pop() 
// num.pop() 
// console.log(num)


// let num = [10,20,30,40,50,60]

// delete or insert Element at the start of the Array

// unshift: Insert Element at the beginning of the Array
// num.unshift(0,5) //add the element from start
// console.log(num)


// delete Element at the start 
// num.shift() //remove the element from start  
// num.shift()
// console.log(num)


// --------------------------------Array: Array kyon nahi c++ java 

// let arr = [10,20,30]
// console.log(typeof arr)


// for of loop ka use bhut karta ha 
// let num = [10,20,30,40,50]
// for(let value of num){
//     console.log(value)
// }



// let marks = [10,20,30,40,50,60,70];
// const a = marks.slice(1,3) //fist index to last index is not include less on index 
// console.log(a) // a variable create a copy 
// console.log(marks) //origin Array is not change  
// slice doesnt change the original array, it just create a new copy of the particular portion and give it back


// const a = marks.splice(2,4,11,12)  //fist element index , range of splice, add(Insert) the element form a index started  
// console.log(a)
// console.log(marks) //splice change the original array
// splice retun a new array  from particular index, second : total element 


// use case mein hum aayenge...
// starting Element : splice: delete , insert karnae ke liya kar sakta hai 
let marks = [10,20,30,40,50,60,70];
// let a = marks.splice(0,1)
// console.log(marks)


// if i have to insert 2 Element form second index: 41,91
marks.splice(2,0,41,91)
console.log(marks)