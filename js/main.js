class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.#render();
  }

  _fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook HP ZowOo Dota fans ', price: 20000},
      {id: 2, title: 'Mouse tic-multi-click', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad logo FAns ECNSe', price: 4500},
      {id: 5, title: 'Shirt ASTRALIS fan remake', price: 150 },
      {id: 6, title: 'Socks winter cold', price: 50 },
      {id: 7, title: 'Jacket NAVI', price: 350 },
      {id: 8, title: 'Shoes "Переобувайся" NaVi Fans formal wear' , price: 250 },
      {id: 9, title: 'Jacket NAVI', price: 350 },
      {id: 10, title: 'Notebook-Pro', price: 120000},
      {id: 12, title: 'Mouse-Logitech G120 game lazy', price: 1500},
      {id: 13, title: 'Keyboard HyperX on-load you skill', price: 8000},
      {id: 14, title: 'Gamepad kids ave some 30yo.', price: 21500},
      {id: 15, title: 'Shirt Game design NAVI', price: 11000 }
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200/FF0000/000000') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  getGoodHTML() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}

const list = new ProductList();


