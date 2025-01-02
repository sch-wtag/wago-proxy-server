const validResponse = () => {
  return Buffer.from([
    0x06, // length field
    0x01, // Unit identifier
    0x06, // Function code
    0x00,
    0x01, // Reference number
    0x12,
    0x34, // Register value
  ]);
};

const exceptionResponse = () => {
  return Buffer.from([
    0x03, // length field
    0x01, // Unit identifier
    0x85, // Function code
    0x02, // Illegal data address exception
  ]);
};

module.exports = { validResponse, exceptionResponse };
