const express = require("express");
const db = require("./models");

const redis = require("redis");
const redisClient = redis.createClient();
const { promisify } = require("util");

redisClient.on("error", function (err) {
  console.log("Error " + err);
});

const getAsync = promisify(redisClient.get).bind(redisClient);

class App {
  constructor() {
    this.app = express();
    this.dbConnection();
    this.setMiddleWare();

    this.test();

    this.status404();
    this.errorHandler();
  }

  async test() {
    console.log(`REDIS TEST START`);

    await this.getTestRedis();
    console.log(`======`);
    await this.setTestRedis();
    console.log(`======`);
    await this.getTestRedis();

    console.log(`REDIS TEST END`);
  }

  async setTestRedis() {
    let results = JSON.parse(await getAsync("test"));

    if (!results) {
      console.log(`REDIS SET`);
      results = await db.Tests.findAll();
      redisClient.set("test", JSON.stringify(results));
    }
  }

  async getTestRedis() {
    let results = JSON.parse(await getAsync("test"));
    console.log(results);
  }

  setMiddleWare() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  status404() {
    this.app.use((req, res, next) => {
      res.status(404).json("not found");
    });
  }

  dbConnection() {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log("DB Sync complete.");
        return db.sequelize.sync();
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  }

  errorHandler() {
    this.app.use((err, req, res, next) => {
      console.log(err);
      res.status(err.status || 500);
      res.json({ error: err.message || "internal server error" });
    });
  }
}

module.exports = new App().app;
