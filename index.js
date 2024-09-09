const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("called.");

  res.json({ hei: "halla2" });
});

const port = 8080;

const server = app.listen(port, () => {
  console.log(`running express app on port: ${port}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
