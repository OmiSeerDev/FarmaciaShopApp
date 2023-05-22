const Carts = require("../../models/Carts");
require("../../models/Products");
const { ObjectId } = require("mongoose").Types;

const updateCart = async (id, prod_id) => {
  const cart = await Carts.getById(new ObjectId(id));
  const prods = cart.products.push(prod_id.product);
  Carts.findOneAndReplace({
    where: { id: id },
    data: { products: prods },
  });

  return cart;
};

module.exports = updateCart;
