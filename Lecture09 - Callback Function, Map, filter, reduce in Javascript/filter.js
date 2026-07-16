const arr = [3,5,9,10,8,7,6,2,1,4,20,56,]

// let answer = []

// for(num of arr){
//     if(num > 10){
//         answer.push(num)
//     }
// }
// console.log(answer)


// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > 10){
//         answer.push(arr[i])
//     }
// }
// console.log(answer)


Array.prototype.Myfilter = function(callback){
    const answer = []

    for(let num of this){  // This - jo mujha call karga ma ausko refer karuga , flexable code 
        if(callback(num)){

            answer.push(num)
        }
    }
    return answer
}
let ans = arr.Myfilter((num)=>num > 10)

let hello = [7,3,12,18,19,5,625,10,2,1,8]
let answer = hello.Myfilter((ele)=> ele > 10)
console.log(answer)



// Arrow Function 
// const answer = arr.filter((ele)=> ele > 10)
// console.log(answer)

// ES5 Functions
// const ans = arr.filter((ele)=>{
//     return ele > 5
// })
// console.log(ans)

// give the condition 
// retune a new Array
// callback ko koi call karaga 

