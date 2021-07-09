const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "/data/db.json"));
const express = require("express");
const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.use(express.static(__dirname + "public"));
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(PORT, () => {
  console.log("JSON Server is running");
});
