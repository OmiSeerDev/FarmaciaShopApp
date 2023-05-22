const Carts = require("../../models/Carts");
const pick = require("../../utilities/picker");
const Products = require("../../models/Products");

const CREATE_CART_FIELDS = ["user", "total", "products", "saleMade"];
//Must send a body w/ user, total = 0 , products = [], saleMade []
const createCart = async (userData) => {
  // userData.user = await Users.findById(userData.user);
  const pickedParams = pick(userData, CREATE_CART_FIELDS, true);
  let { user, products, saleMade } = pickedParams;
  const prices = [];
  for (let product of products) {
    prices.push(await Products.getPrice(product));
  }
  const total = prices.reduceRight((a, b) => a + b, 0) / 100;
  const cart = await new Carts({
    user,
    total,
    products,
    saleMade,
  }).save();

  return cart;
};

module.exports = createCart;
