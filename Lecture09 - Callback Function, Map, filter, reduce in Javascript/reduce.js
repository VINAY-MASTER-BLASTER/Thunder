const arr = [10,20,30,40,50]

// const ans = arr.reduce((accumulator, currentValue, currentIndex, array)=>{
//     return accumulator + currentValue
// },0) //initialValue
// console.log(ans)



const ans = arr.reduce((accumulator, currentValue, currentIndex, array)=>{
    return accumulator + currentValue
},1) //initialValue
console.log(ans)


