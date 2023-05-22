const express = require("express");
const createUser = require("../services/Create/CreateUser");
const deleteUser = require("../services/Delete/DeleteUser");
const UserValidator = require("../utilities/usersValidator");

const router = new express.Router();
router.post("/", async (req, res) => {
  const { body } = req;
  const validUser = await UserValidator(body);

  if (!validUser) {
    throw new InvalidParamsError(validUser);
  }

  const user = await createUser(body);

  return res.json(user.map);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await deleteUser(id);

  return res.json(user.map);
});

module.exports = router;
