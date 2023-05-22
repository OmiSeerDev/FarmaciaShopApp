const express = require("express");
const router = express.Router();
let PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentService();
router.get("/health", function (req, res) {
  return res.json({
    "/payment": "generates a payment link",
  });
});

router.get("/payment", function (req, res) {
  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;
