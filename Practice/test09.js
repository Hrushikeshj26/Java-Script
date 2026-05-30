// filter + map (Chaining)

const products = [
  { id: 1, name: "Wireless Mouse", price: 999, inStock: true },
  { id: 2, name: "Mechanical Keyboard", price: 2500, inStock: false },
  { id: 3, name: "Gaming Headset", price: 1800, inStock: true },
  { id: 4, name: "Mousepad", price: 400, inStock: false }
];

function getAvailableProducts(productList){

    let availableItems = products.filter( stock => stock.inStock == true )
    .map(stock => `${stock.name} is available for ₹${stock.price}`);

    return availableItems;
}

console.log(getAvailableProducts(products));
