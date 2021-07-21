const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = process.env.PORT || 3333; // Heroku will need the PORT environment variable

app.use("/", express.static("app/build"));

app.listen(port, () => console.log(`App is live on port ${port}!`));
