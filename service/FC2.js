const validResponse = () => {
  return Buffer.from([
    0x04, // length field
    0x01, // Unit identifier
    0x02, // Function code
    0x01, // Byte count
    0x12, // Bit values
  ]);
};

const exceptionResponse = () => {
  return Buffer.from([
    0x03, // length field
    0x01, // Unit identifier
    0x82, // Function code
    0x02, // Illegal data address exception
  ]);
};

module.exports = { validResponse, exceptionResponse };
