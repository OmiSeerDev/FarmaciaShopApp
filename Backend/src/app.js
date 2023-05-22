const dotenv = require("dotenv");
const express = require("express");
const HealthController = require("./controllers/HealthController");
const UsersController = require("./controllers/UsersController");
const ProductsController = require("./controllers/ProductsController");
const CartsController = require("./controllers/CartsController");
const dbConnector = require("./utilities/dbConnection");
const bodyParser = require("body-parser");
const PaymentsController = require("./controllers/PaymentController");
const cors = require("cors");

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS,
  optionsSuccessStatus: 200,
};

dbConnector.init();
const app = express();
async function main() {
  dotenv.config();
  try {
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use("/", HealthController);
    app.use("/user", UsersController);
    app.use("/product", ProductsController);
    app.use("/cart", CartsController);
    app.use("/payment", PaymentsController);
    const port = process.env.PORT;
    app.listen(port, "localhost", () => {
      console.info(`Server running in port ${port}`);
    });
  } catch (error) {
    throw new error();
  }
}
main().catch(console.error);
