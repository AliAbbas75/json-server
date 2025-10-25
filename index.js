const jsonServer = require("json-server");

// Create server and routes
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/db.json`);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Use Render's or local port
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`✅ JSON Server running on port ${PORT}`);
});
