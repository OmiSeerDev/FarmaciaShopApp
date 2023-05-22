const config = {
  url: {
    backend: "http://localhost:1331",
  },
};
const microservices = {
  backend: config.url.backend,
};

const routes = {
  health: {
    backend: microservices.backend + "/health",
    payment: microservices.backend + "/payment/health",
  },
  get: {
    cart: microservices.backend + "/cart",
    products: microservices.backend + "/product",
    user: microservices.backend + "/user",
    payment: microservices.backend + "/payment",
  },
  post: {
    cart: microservices.backend + "/cart",
    product: microservices.backend + "/product",
    user: microservices.backend + "/user",
  },
  put: { cart: microservices.backend + "/cart" },
  delete: {
    product: microservices.backend + "/product",
    user: microservices.backend + "/user",
    cart: microservices.backend + "/cart",
  },
};

export default routes;
