const Products = require("../../models/Products");
const { ObjectId } = require("mongoose").Types;

const deleteProduct = async (id) => {
  const product = await Products.getById(new ObjectId(id));

  return await product.delete();
};

module.exports = deleteProduct;
