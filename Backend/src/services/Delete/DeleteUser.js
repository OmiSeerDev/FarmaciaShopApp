const Users = require("../../models/Users");
const { ObjectId } = require("mongoose").Types;

const deleteUser = async (id) => {
  const user = await Users.getById(new ObjectId(id));

  return await user.delete();
};

module.exports = deleteUser;
