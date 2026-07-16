const arr = [10,20,30,40,50,60]

// first value number , second index , third Hole Array
// arr.forEach((num,index,array)=>{ //callback 
//    console.log(num,index,array)
// })

// Array Method 
// Array every number ko num dalna aur print karna 
// Just For Print value
// it not retune || undefined 



Array.prototype.MyforEach = function(callback){
    for(let i = 0; i<arr.length; i++){
    callback(arr[i],i,arr)
}}
arr.MyforEach((num,index,array)=>{
    console.log(num)
})












