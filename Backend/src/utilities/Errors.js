class InvalidParamsError extends Error {
  constructor(message) {
    super();
    this.name = "Invalid Params";
    this.message = message;
  }
}
