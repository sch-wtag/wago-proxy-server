const validResponse = () => {
  return Buffer.from([
    0x06, // length field
    0x01, // Unit identifier
    0x05, // Function code
    0x00,
    0x01, // Reference number
    0xff,
    0x00, // Value
  ]);
};

const exceptionResponse = () => {
  return Buffer.from([
    0x03, // length field
    0x01, // Unit identifier
    0x85, // Function code
    0x03, // Illegal data value exception
  ]);
};

module.exports = { validResponse, exceptionResponse };
