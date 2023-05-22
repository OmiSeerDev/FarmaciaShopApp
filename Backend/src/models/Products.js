const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;

class Product {
  static async getById(_id) {
    return this.findOne({ _id });
  }

  static async getPrice(_id) {
    const { price } = await this.findOne({ _id });
    return price;
  }

  static async getNames(_id) {
    const { name } = await this.findOne({ _id });
    return name;
  }

  static async getByName(name) {
    const product = await this.findOne({ name });
    return product;
  }
}
const ProductsSchema = new mongoose.Schema(
  {
    _id: { type: ObjectId, required: true, auto: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: false, default: "" },
    createdAt: { type: Date, required: false, default: new Date() },
    deletedAt: { type: Date, required: false },
  },
  {
    timestamps: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
ProductsSchema.loadClass(Product);

module.exports = mongoose.model("Product", ProductsSchema, "products");
