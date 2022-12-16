let shop = document.querySelector("#shop");
console.log(shop);

//  es6 arrow function
let generateShop = () => {
  return (shop.innerHTML = `
      <div class="item">

      <img width="221" height="221"
        src="https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      <div class="details">
        <h3>casual shirt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div class="price-quantity">
          <h2>$ 45</h2>
          <div class="buttons">
            <i class="bi bi-dash-circle"></i>
            <div class="quantity">0</div>
            <i class="bi bi-plus-circle"></i>
          </div>
        </div>
      </div>
    </div>
    `);
};

generateShop();
