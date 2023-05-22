const Cart = require("../../models/Carts");
const { ObjectId } = require("mongoose").Types;

const deleteCart = async (id) => {
  try {
    const cart = await Cart.getById(new ObjectId(id));
    return await cart.delete(id);
  } catch (e) {
    throw new Error("Cart not found");
  }
};

module.exports = deleteCart;
