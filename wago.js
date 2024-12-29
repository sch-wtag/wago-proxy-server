const net = require("net");

// Create a TCP server
const server = net.createServer((socket) => {
  // Event listener for when data is received from the client
  socket.on("data", (data) => {
    console.log(
      "Received Modbus Request Buffer: ",
      data.toString("hex").toUpperCase()
    );

    const response = Buffer.from(data);

    // Send the response back to the client
    socket.write(response, () => {
      console.log("Sent Buffer: ", response.toString("hex").toUpperCase());
    });
  });

  // Event listener for when the connection ends
  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

// Set the server to listen on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server listening on port 3000...");
});
