const cartItems = [
  { id: 1, name: "Wireless Mouse", price: 800, quantity: 2, inStock: true },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 2500,
    quantity: 1,
    inStock: true,
  },
  { id: 3, name: "USB-C Hub", price: 1200, quantity: 0, inStock: false },
  { id: 4, name: "Laptop Stand", price: 1500, quantity: 1, inStock: true },
  { id: 5, name: "Webcam", price: 3000, quantity: 1, inStock: false },
];

let itemInStock = cartItems.filter((item) => item.inStock == true);

let cartDetail = itemInStock.map((item) => {
  return {
    name: item.name,
    amount: item.price * item.quantity,
  };
});

let totalAmount = 0;

for (let i = 0; i < cartDetail.length; i++) {
  totalAmount = totalAmount + cartDetail[i].amount;
}

let reduceTotal = cartDetail.reduce((total, currentItem) => {
  return total + currentItem.amount;
}, 0);

console.log("Your Total Amount with ForLoop is: ", totalAmount);
console.log("Your Total Amount with Reduce is: ", reduceTotal);
