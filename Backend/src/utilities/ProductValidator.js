const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().min(4).max(16).required(),
  price: Joi.number().required(),
});

const validate = (prodData) => {
  if (!prodData) {
    return "Product name or price are empty";
  }
  return productSchema.validateAsync(prodData);
};

module.exports = validate;
