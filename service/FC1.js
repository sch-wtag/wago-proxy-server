const validResponse = () => {
  return Buffer.from([
    0x04, // length field
    0x01, // Unit identifier
    0x01, // Function code
    0x01, // Byte count
    0x12, // Bit values
  ]);
};

const exceptionResponse = () => {
  return Buffer.from([
    0x03, // length field
    0x01, // Unit identifier
    0x81, // Function code
    0x01, // Illegal function exception
  ]);
};

module.exports = { validResponse, exceptionResponse };
