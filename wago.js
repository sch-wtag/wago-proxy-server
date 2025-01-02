const net = require("net");
const modbus = require("./controller/Modbus");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(
      "Received Modbus Request Buffer: ",
      data.toString("hex").toUpperCase()
    );

    const response = modbus.parseRequest(Buffer.from(data));

    const sendInBuffer = true;

    if (sendInBuffer) {
      console.log("Initial Response: ", response);

      const chunkSizes = [2, 3, 4];

      const sendChunk = (offset) => {
        if (offset < response.length) {
          const chunkSize = Math.min(
            response.length - offset,
            chunkSizes[Math.floor(Math.random() * chunkSizes.length)]
          );

          const chunks = response.slice(offset, offset + chunkSize);

          setTimeout(() => {
            socket.write(chunks, () => {
              console.log(
                "Sent Buffer: ",
                chunks.toString("hex").toUpperCase()
              );
              sendChunk(offset + chunkSize);
            });
          }, 1000);
        }
      };

      sendChunk(0);
    } else {
      socket.write(response, () => {
        console.log(
          "Sent Buffer (one time): ",
          response.toString("hex").toUpperCase()
        );
      });
    }
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server listening on port 3000...");
});
