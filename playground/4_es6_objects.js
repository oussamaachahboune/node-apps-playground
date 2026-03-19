// property shorthand

const name = "Oussama";
const userAge = 23;

const user = {
  name, // name: name,
  age: userAge,
  location: "Agadir",
};

console.log(user);

// object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

const { label: productLabel, stock, rating = 5 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  //   const { label, stock } = myProduct;

  console.log(type, label, stock);
};

transaction("order", product);
// transaction("order");
