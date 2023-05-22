const Users = require("../../models/Users");
const pick = require("../../utilities/picker");

const CREATE_USER_FIELDS = ["name", "email", "password", "isAdmin"];

const createUser = async (userData) => {
  const pickedParams = pick(userData, CREATE_USER_FIELDS, true);
  const { name, email, password, isAdmin } = pickedParams;

  const user = await new Users({
    name,
    email,
    password,
    isAdmin,
  }).save();

  return user;
};

module.exports = createUser;
