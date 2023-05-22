const Products = require("../../models/Products");
const pick = require("../../utilities/picker");

const CREATE_PRODUCTS_FIELDS = ["name", "price", "description"];

const createUser = async (userData) => {
  const pickedParams = pick(userData, CREATE_PRODUCTS_FIELDS, true);
  const { name, price, description } = pickedParams;

  const product = await new Products({
    name,
    price,
    description,
  }).save();

  return product;
};

module.exports = createUser;
