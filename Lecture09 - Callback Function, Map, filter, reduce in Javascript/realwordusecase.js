const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24",
    category: "Electronic",
    price: 79999,
    inStock: true,
  },
  {
    id: 2,
    name: "The Alchemist",
    category: "Books",
    price: 399,
    inStock: true,
  },
  {
    id: 3,
    name: "LG Washing Machine",
    category: "Appliance",
    price: 25999,
    inStock: false,
  },
  {
    id: 4,
    name: "Basmati Rice 5kg",
    category: "Groceries",
    price: 599,
    inStock: true,
  },
  {
    id: 5,
    name: "Sony Headphones",
    category: "Electronic",
    price: 4999,
    inStock: true,
  },
  {
    id: 6,
    name: "Atomic Habits",
    category: "Books",
    price: 499,
    inStock: true,
  },
  {
    id: 7,
    name: "Microwave Oven",
    category: "Appliance",
    price: 8999,
    inStock: true,
  },
  {
    id: 8,
    name: "Olive Oil 1L",
    category: "Groceries",
    price: 699,
    inStock: false,
  }
];


// goods =   {id: 1,name: "Samsung Galaxy S24",category: "Electronic",price: 79999,inStock: true,}

// const filter = products.filter((goods)=>goods.price > 500)
// const filter = products.filter((goods)=>goods.inStock === false)
// console.log(filter)


// chaining 
// 8 -> 6
const product = products.filter((goods)=>goods.inStock).map((goods)=> ({name:goods.name, category:goods.category, price:goods.price}))
console.log(product)

// const answer = product.map((goods)=> ({name:goods.name, category:goods.category, price:goods.price}))
// console.log(answer)