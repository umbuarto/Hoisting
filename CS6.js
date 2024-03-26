let kata1 = "Buka";
let kata2 = "Puasa";
let kata3 = "Segar";

// Panggil menggunakan ES5
console.log("Menggunakan CS5 \n" + kata1 + " " + kata2 + " " + kata3 + " ");

// Panggil menggunakan CS6
console.log(`Menggunakan CS6 \n${kata1} ${kata2} ${kata3}`);

// Studi kasus buat sebuah inventoru management
let carts = [
  {
    id: 1,
    name: "Dell i5",
    type: "Laptop",
    price: 7000000,
    stock: 5,
    status: true,
  },
  {
    id: 2,
    name: "Dell i5",
    type: "Keyboard",
    price: 7000000,
    stock: 5,
    status: false,
  },
  {
    id: 3,
    name: "Dell i5",
    type: "Mouse",
    price: 7000000,
    stock: 5,
    status: false,
  },
];

const showCarts = () => {
  console.log("Carts list : ");
  carts.forEach((cart) => {
    const { id, name, type, price, stock } = cart;
    if (status === false) {
      console.log(`${id}.[X]${name} - Rp.${price}.`);
      console.log(`${type} - stocks: ${stock} pcs`);
    } else {
      console.log(`${id}.[ ]${name} - Rp.${price}.`);
      console.log(`${type} - stocks: ${stock} pcs`);
    }
  });
};

const addItem = (name, type, price, stock) => {
  const id = carts[(carts, length - 1)].id + 1;
  const status = true;

  carts.push({
    id,
    name,
    type,
    price,
    status,
    stock,
  });
};

const getCardById = (id) => {
  let temp = {};
  carts.forEach((cart) => {
    if (cart.id === id) {
      temp = cart;
    }
  });
  console.log(temp);
};

const delateCart = (id) => {
  carts = carts.filter((cart) => cart.id !== id);
};

updateCart = (id, name, type, price, status, stock) => {
  carts = carts.map((cart) => {
    if (carts.id === id) {
      cart.name = name;
      cart.type = type;
      cart.price = price;
      cart.status = status;
      cart.stock = stock;
    }
    return cart;
  });
};

getCardById(1);
showCarts();
