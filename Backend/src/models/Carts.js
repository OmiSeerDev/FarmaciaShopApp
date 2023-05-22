const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;
const Products = require("./Products");
const Users = require("./Users");

class Cart {
  static async getById(_id) {
    const cart = await this.findOne({ _id });
    return cart;
  }
  static async getTotal(_id) {
    const { total } = await this.findOne({ _id });
    return total;
  }
  static async getProducts(_id) {
    const { products } = await this.findOne({ _id });
    let prods = [];
    for (let i = 0; i < products.length; i++) {
      prods.push(await Products.getNames(products[i]._id));
    }
    return prods;
  }
}
const CartsSchema = new mongoose.Schema(
  {
    _id: { type: ObjectId, required: true, auto: true },
    user: { type: ObjectId, ref: Users, required: true },
    createdAt: { type: Date, required: false, default: new Date() },
    total: { type: Number, required: true, default: 0 },
    products: {
      type: [ObjectId],
      ref: Products,
      required: false,
    },
    saleMade: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

CartsSchema.loadClass(Cart);

module.exports = mongoose.model("Cart", CartsSchema, "carts");
