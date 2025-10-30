var Product = (function() {
  function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  return Product;
})();


(function() {
  Product.prototype.getDiscountedPrice = function(discountPercent) {
    return this.price - (this.price * discountPercent / 100);
  };
})();


var findCostliestProduct = (function() {
  return function(productList) {
    var costliest = productList[0];
    for (var i = 1; i < productList.length; i++) {
      if (productList[i].price > costliest.price) {
        costliest = productList[i];
      }
    }
    return costliest;
  };
})();

(function() {
  var style = document.createElement("style");
  style.textContent = `
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background-color: #f8f9fa;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    #costliestProductSection {
      text-align: center;
      font-weight: bold;
      margin-bottom: 30px;
      font-size: 18px;
    }

    .productContainer {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .productCard {
      background: white;
      border-radius: 10px;
      padding: 20px;
      width: 200px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      transition: 0.3s;
      text-align: center;
    }

    .productCard:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .productPrice {
      color: #640247;
      font-weight: bold;
    }

    button {
      background-color: #6d2d02;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 6px 10px;
      cursor: pointer;
      margin-top: 10px;
    }

    button:hover {
      background-color: #025829;
    }
  `;
  document.head.appendChild(style);
})();


(function() {

  var productList = [
    new Product("Ring", 10000, "Jwellery"),
    new Product("Laptop", 200000, "Electronics"),
    new Product("Headphones", 4250, "Electronics"),
    new Product("Pen", 120, "Stationery")
  ];

  var costliestProduct = findCostliestProduct.call(null, productList);

  var costliestProductSection = document.getElementById("costliestProductSection");
  costliestProductSection.textContent = 
    "The costliest product is " + costliestProduct.name + 
    " and its price is $" + costliestProduct.price;

  var productContainer = document.getElementById("productContainer");

  productList.forEach(function(product) {
    var productCard = document.createElement("div");
    productCard.className = "productCard";

    var productName = document.createElement("h3");
    productName.textContent = product.name;

    var productCategory = document.createElement("p");
    productCategory.textContent = "Category: " + product.category;

    var productPrice = document.createElement("p");
    productPrice.className = "productPrice";
    productPrice.textContent = "Price: " + product.price + " Rupees";

    var discountButton = document.createElement("button");
    discountButton.textContent = "Show 15% Discount";

    var discountDisplay = document.createElement("p");

    discountButton.addEventListener("click", function() {
      var discountedPrice = product.getDiscountedPrice(15);
      discountDisplay.textContent = 
        "Discounted Price: " + discountedPrice.toFixed(2) + " Rupees";
    });

    productCard.addEventListener("mouseenter", function() {
      productCard.style.border = "2px solid #055e34ff";
    });

    productCard.addEventListener("mouseleave", function() {
      productCard.style.border = "none";
    });

    productCard.appendChild(productName);
    productCard.appendChild(productCategory);
    productCard.appendChild(productPrice);
    productCard.appendChild(discountButton);
    productCard.appendChild(discountDisplay);

    productContainer.appendChild(productCard);
  });

})();
