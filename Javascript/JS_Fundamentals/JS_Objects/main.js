// Some new methods in ECMAScript 2023, 14th edition of JavaScript

//Object.groupBy: allows you to separate based on property value, type or quantity

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  function myCallback({ quantity }) {
    return quantity > 5 ? "ok" : "restock";
  }
  
  const result2 = Object.groupBy(inventory, myCallback);
  console.log(result2);