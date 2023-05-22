const express = require("express");
const createProduct = require("../services/Create/CreateProduct");
const Products = require("../models/Products");
const deleteProduct = require("../services/Delete/DeleteProduct");
const validate = require("../utilities/ProductValidator");
const router = new express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  return res.json(product);
});

router.get("/name/:name", async (req, res) => {
  const { name } = req.params;
  const product = await Products.getByName(name);
  return res.json(product);
});
router.post("/", async (req, res) => {
  const { body } = req;
  const validProduct = await validate(body);
  if (!validProduct) {
    return "Not a valid product";
  }

  const product = await createProduct(body);
  return res.json({
    productId: product._id,
    name: product.name,
    price: product.price,
    description: product.description,
    createdAt: product.createdAt,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await deleteProduct(id);
  return res.json(product.map);
});

module.exports = router;
