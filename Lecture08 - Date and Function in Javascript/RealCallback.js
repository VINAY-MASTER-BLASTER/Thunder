// Zomato function

// Zomato and Blinkit merger

function ZomatoRestaurant(){
    console.log("Restaurant is Preparing the order")
}

function blinkitWarehouse(){
    console.log('packing the order for user')
}

function Payment(amount,callback){
    console.log(amount,"Payment is happenning")
    console.log("Payment is done")
    // ZomatoRestaurant() Hardcode only call Zomato

    // callback() reusable code 

    // GST 
    // Commision Payment Calculate 
}


Payment(500,ZomatoRestaurant)
Payment(1000,blinkitWarehouse)

// value haamra jab bhi hamara pass hu usko hardcode na kara
// LLD  - code Write karna ka tarika 