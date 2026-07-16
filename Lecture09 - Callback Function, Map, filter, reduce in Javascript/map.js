// const arr = [10,20,11,23,18,3,4,6,8]
// const newarr = arr.map((ele)=>ele*5)
// console.log(newarr)

// retume a new array 
// one bye one take your value and perform a specific task 




// let arr = [2,2,4,5,10,7,8,9,0]
// Array.prototype.Mymap = function(callback){
//     let answer = []
//     for(let i = 0; i<arr.length; i++){
//         answer.push(callback(arr[i]))
//     }
//     return answer
// }
// const value = arr.Mymap((ele)=>ele*5)


// let arr = [2,2,4,5,10,7,8,9,0]
// Array.prototype.Mymap = function(callback){
//     let answer = []
//     for(num of arr){
//         answer.push(callback(num))
//     }
//     return answer
// }
// const value = arr.Mymap((ele)=>ele*5)
// console.log(value)




Array.prototype.Mymap = function(callback){
    let answer = []
    for(let i = 0; i<this.length; i++){
        answer.push(callback(this[i],i,this))
    }
    return answer
}
let arr = [2,2,4,5,10,7,8,9,0]
const value = arr.Mymap((ele)=>ele*5)
console.log(value)
