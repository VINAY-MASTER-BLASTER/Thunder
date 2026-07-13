// JavaScript Methods use Callback function

const arr = [1,3,4,2,54,6,75,7,5,85,8,-4,2,-5]
const answer = arr.sort((a,b)=>a-b)
console.log(answer)



// myArrrange ===> Odd Number , Even Number

// Custume Function 
arr.sorter = function(){
    console.log("Hello Function ji")
}

arr.sorter()