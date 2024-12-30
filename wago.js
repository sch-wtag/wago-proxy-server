const net = require("net");
const modbus = require("./controller/Modbus");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(
      "Received Modbus Request Buffer: ",
      data.toString("hex").toUpperCase()
    );

    const response = modbus.parseRequest(Buffer.from(data));

    socket.write(response, () => {
      console.log("Sent Buffer: ", response.toString("hex").toUpperCase());
    });
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server listening on port 3000...");
});
