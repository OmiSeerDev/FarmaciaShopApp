const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(3).max(32).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean(),
});
const validate = (userData) => {
  if (!userData) {
    return "Required fields are empty";
  }

  return userSchema.validateAsync(userData);
};

module.exports = validate;
