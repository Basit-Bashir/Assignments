const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// Add 'Sugar' at the end of the shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

// Remove 'Honey' if you are allergic to honey
const honeyIndex = shoppingCart.indexOf("Honey");
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Green Tea";
}

console.log(shoppingCart);
