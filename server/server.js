const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "/data/db.json"));

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});
