const express = require("express");
const createCart = require("../services/Create/CreateCart");
const updateCart = require("../services/Update/UpdateCart");
const deleteCart = require("../services/Delete/DeleteCart");
const Carts = require("../models/Carts");
const router = new express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const cart = await Carts.getById(id);
  return res.json({ cart });
});

router.post("/", async (req, res) => {
  const { body } = req;

  const cart = await createCart(body);
  return res.json({ cart });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const cart = await updateCart(id, product);
  return res.json(cart);
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await deleteCart(id);
    return res.json(cart);
  } catch (e) {
    throw new Error("Not able to delete");
  }
});

module.exports = router;
