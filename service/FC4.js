const validResponse = () => {
  return Buffer.from([
    0x07, // length field
    0x01, // Unit identifier
    0x04, // Function code
    0x04, // Byte count
    0x12,
    0x34, // Value of reg 0 (split into two bytes)
    0x23,
    0x45, // Value of reg 1 (split into two bytes)
  ]);
};

const exceptionResponse = () => {
  return Buffer.from([
    0x03, // length field
    0x01, // Unit identifier
    0x84, // Function code
    0x02, // Illegal data address exception
  ]);
};

module.exports = { validResponse, exceptionResponse };
