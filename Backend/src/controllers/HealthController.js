const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const router = new express.Router();
const faker = require("faker");
function serverName() {
  function FakerService() {
    console.log("Server name");
    this.name = faker.random.words();
  }

  function Singleton() {
    this.instance = null;
    this.getInstance = function getInstance() {
      if (!this.instance) {
        this.instance = new FakerService();
      }
      return this.instance;
    };
  }

  const singleton = new Singleton();
  return singleton.getInstance();
}
router.get("/health", (req, res) => {
  const mongo = mongoose.connection.readyState === 1;
  const json = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  const { version, branch } = json;
  const { name } = serverName();

  const response = {
    mongo,
    name,
    version,
    branch,
  };

  if (!mongo) {
    res.status(500).send(response);
  } else {
    res.json(response);
  }
});

module.exports = router;
