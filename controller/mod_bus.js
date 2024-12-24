function createModbusTCPHeader(
  transactionId,
  protocolId,
  unitId,
  functionCode,
  startAddress,
  quantity
) {
  return Buffer.from([
    (transactionId >> 8) & 0xff,
    transactionId & 0xff, // Transaction ID
    (protocolId >> 8) & 0xff,
    protocolId & 0xff, // Protocol ID
    0x00,
    0x06, // Length (fixed to 6 for this request)
    unitId, // Unit ID
    functionCode, // Function Code
    (startAddress >> 8) & 0xff,
    startAddress & 0xff, // Starting Address
    (quantity >> 8) & 0xff,
    quantity & 0xff, // Quantity of Registers
  ]);
}

const getModBusReq = (req, res) => {
  const requestData = req.body;

  // Ensure the body contains data
  if (!requestData || requestData.length < 8) {
    return res.status(400).send("Invalid Modbus TCP header.");
  }

  console.log("Received raw data (hex):", requestData.toString("hex"));

  // Extract TCP header components
  const transactionId = requestData.readUInt16BE(0); // Bytes 0-1
  const protocolId = requestData.readUInt16BE(2); // Bytes 2-3
  const length = requestData.readUInt16BE(4); // Bytes 4-5
  const unitId = requestData.readUInt8(6); // Byte 6
  const functionCode = requestData.readUInt8(7); // Byte 7

  // Log extracted fields
  console.log("Transaction ID:", transactionId);
  console.log("Protocol ID:", protocolId);
  console.log("Length:", length);
  console.log("Unit ID:", unitId);
  console.log("Function Code:", functionCode);

  // Generate a response based on the request data
  const responseData = Buffer.concat([
    requestData.slice(0, 4), // Echo Transaction ID and Protocol ID
    Buffer.from([0x00, 0x05]), // Response Length (example, adjust as needed)
    Buffer.from([unitId]), // Echo Unit ID
    Buffer.from([functionCode]), // Echo Function Code
    Buffer.from([0x00, 0x00]), // Example Data (2 bytes)
  ]);

  console.log("Response data (hex):", responseData.toString("hex"));

  // Send the response back as raw binary
  res.set("Content-Type", "application/octet-stream");
  res.send(responseData);
};

module.exports = { getModBusReq };
