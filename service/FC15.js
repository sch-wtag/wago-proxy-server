const validResponse = () => {
  return Buffer.from([
    0x06, // length field
    0x01, // Unit identifier
    0x0f, // Function code
    0x00,
    0x00, // Reference number
    0x00,
    0x10, // Bit count
  ]);
};

const exceptionResponse = () => {
  return Buffer.from([
    0x03, // length field
    0x01, // Unit identifier
    0x8f, // Function code
    0x02, // Illegal data address exception
  ]);
};

module.exports = { validResponse, exceptionResponse };
