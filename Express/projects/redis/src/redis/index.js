const { json } = require("express");
const { createClient } = require("redis");

const client = createClient();

async function connectToRedis() {
  try {
    await client.connect();
    console.log("connected to redis");
  } catch (error) {
    console.log("error while connecting to REDIS ", error);
  }
}

async function add(req, res) {
  let { key, value } = req.body;
  try {
    await client.set(key, value);
    res.send("key value pair added");
  } catch (error) {
    console.log("error while adding key value pair to redis : ", error);
    res.status(500).send(error);
  }
}

async function get(req, res) {
  let { key } = req.body;
  try {
    const value = await client.get(key);
    res.json({ key, value });
  } catch (error) {
    console.log("error while fetching the value for key ", key, error);
    res.status(500).send(error);
  }
}

async function remove(req, res) {
  let { key } = req.body;
  try {
    await client.DEL(key);
    res.send("key value pair is deleted");
  } catch (error) {
    console.log("error while removing the key from redis : ", error);
    res.status(500).send(error);
  }
}

async function update(req, res) {
  let { key, value } = req.body;
  try {
    await client.set(key, value);
    res.send("key value pair updated");
  } catch (error) {
    console.log("error while updating the key value pair : ", error);
    res.status(500).send(error);
  }
}

module.exports = {
  add,
  update,
  remove,
  get,
  connectToRedis,
};
