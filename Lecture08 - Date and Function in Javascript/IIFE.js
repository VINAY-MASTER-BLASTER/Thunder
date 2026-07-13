// IIFE 
// function hello(){
//     console.log('Hello Ji')
// }
// the function declaration code execute 


// (function(){
//     console.log('Hello ji')
// })()


// Javascript Function ke ander kisi dusra function ko pass kar sakte hai 
// callback function 

// function greet(){
//     console.log('Hello ji')
// }
// function meet(){
//     console.log('Hello Meet')
//     
// }
// meet
// greet()



// function greet(){
//     console.log('Hello ji')
// }
// callback = greet
// function meet(callback){
//     console.log('Hello Meet')
//     callback()
// }
// meet(greet) //Reference 
// Callback - fuction ka ander another function passed as a argument it's called a callback function 




// function greet(){
//     console.log('Hello ji')
// }
// function meet(){
//     console.log('Hello meet')
//     greet()
//     console.log('I am done')
// }
// meet()

// Output 
// Hello meet 
// hello ji 
// i am done 

// this apparoch is not good at all 
// greet() fuction ko ḥardcode kar diya hai
// if i'm Using callback function ka 





function greet(){
    console.log('Hello ji')
}
function morning(){
    console.log('Hello Good Morning')
}
function meet(callback){
    console.log('Hello meet')
    callback()
    console.log('I am done')
}
// meet(morning)
// meet(greet)

// output 
// Hello meet 
// Good Morning
// i am done


// Hello meet 
// hello ji 
// i am done 

// callback - reusable flexable function