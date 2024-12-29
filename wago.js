const net = require("net");

// Create a TCP server
const server = net.createServer((socket) => {
  // Event listener for when data is received from the client
  socket.on("data", (data) => {
    console.log(
      "Received Modbus Request Buffer: ",
      data.toString("hex").toUpperCase()
    );

    // Simulate a response for a Modbus TCP request
    // For example, a typical response to a Modbus read request (Function Code 3):
    // const response = Buffer.from([
    //   0x00,
    //   0x01, // Transaction Identifier (2 bytes)
    //   0x00,
    //   0x00, // Protocol Identifier (2 bytes)
    //   0x00,
    //   0x06, // Length (2 bytes)
    //   0x01, // Unit Identifier (1 byte)
    //   0x03, // Function Code (1 byte)
    //   0x02, // Byte Count (2 bytes)
    //   0x00,
    //   0x01, // Register Value (2 bytes)
    // ]);

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
