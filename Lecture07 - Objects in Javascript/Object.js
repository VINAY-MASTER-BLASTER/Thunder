// Object

//  Information : Object ke form me store kara dete hai
// name, age, city, emailId

// Database : So may user information
// Hardcode  : 0:name 1: city 2:email - need to rember
// const arr = [["vinay", 21, "Delhi", "vinaytoppo@gmail.com",420],["vikas", 21, "uttarpardash", "vikas @gmail.com"]]
// it's very diffecult to understand the data in the of arr

// Store the Data in the form of Array
// Here we have a meaning to Understand so use Object
// const user = {
//     name : "Vinay",
//     age : 21,
//     city : "Delhi Cant",
//     email : "Vinaytoppo154@gmail.com",
//     amount : 420

// }
// Here only see and easly understand

// Backend sa Data come in this form
// const users = [
//     {
//     name : "Vinay",
//     age : 21,
//     city : "Delhi Cant",
//     email : "Vinaytoppo154@gmail.com",
//     amount : 420
// },{
//     name : "Vikas",
//     age : 21,
//     city : "Delhi Cant",
//     email : "vikas@gmail.com",
//     amount : 420

// }
// ]

function dispaly(food) {
  console.log(food.name);
  console.log(food.price);
  console.log(food.rating);
  console.log(food.descripation);
  console.log(food.ImageLink);
}

const obj = {
  name: "Barbeque in a Box (Non Veg) Premium",
  price: 1169,
  rating: 4.7,
  descripation:
    "Serves 1 | Nothing better than a crispy yet juicy hot chicken wings, tossed in BBQ sauce, will surely make you crave for more.",
  ImageLink: "https:1232",
};
const obj2 = {
  name: "Grilled Chicken Bites (9 Pcs)",
  price: 199,
  rating: 4.9,
  descripation:
    "Serves 1 | Soft and juicy grilled chicken pieces seasoned with mild spices. Tasty, healthy, and perfect for snacking.",
  ImageLink: "https:1222",
};
dispaly(obj);
dispaly(obj2);


// Backend sa Data Array ki form ma aata hai (API)
const arr = [
  {
    name: "Barbeque in a Box (Non Veg) Premium",
    price: 1169,
    rating: 4.7,
    descripation:
      "Serves 1 | Nothing better than a crispy yet juicy hot chicken wings, tossed in BBQ sauce, will surely make you crave for more.",
    ImageLink: "https:1232",
  },
  {
    name: "Grilled Chicken Bites (9 Pcs)",
    price: 199,
    rating: 4.9,
    descripation:
      "Serves 1 | Soft and juicy grilled chicken pieces seasoned with mild spices. Tasty, healthy, and perfect for snacking.",
    ImageLink: "https:1222",
  },
  {
    name: "Smoky Grilled Chicken Feast Bucket",
    price: 678.10,
    rating: null,
    descripation:
      "Bucket for Two - 2 Smoky Grilled chicken Full Leg Pc, 2 Hot & Crispy, Large Popcorn.| Allergens: Wheat, Soya, Milk| Protein per gm 92| Portion weight in gm 930| Kcal per serve 1152| Carbohydrate per gm 60| Total Fat per gm 62| Sodium per serve 2276|.",
    ImageLink: "https:12455",
  }
];


// arr : bhut saare Object store 
// arr  = [Obj,Obj1,Obj3]
//        1000,1200,1400
// const food = 1200
// food = obj2 

for(const food of arr){
    dispaly(food)
}

