const express = require("express");
const path = require("path");
const fs = require("fs");

const modBus = require("./controller/mod_bus");
const crud = require("./controller/crud");

const app = express();
const PORT = 3000;

app.use(express.raw({ type: "application/octet-stream", limit: "1mb" }));
app.use(express.json());

app.get("/modbus", modBus.getModBusReq);

app.get("/", crud.getBaseResponse);
app.get("/info", crud.getInfoResponse);
app.post("/info", crud.postInfoResponse);
app.get("/file", crud.getFileContent);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
