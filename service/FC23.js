const validResponse = () => {
  return Buffer.from([
    0x07, // length field
    0x01, // Unit identifier
    0x17, // Function code
    0x04, // Byte count
    0x00,
    0x04, // Reg1 value
    0x56,
    0x78, // Reg2 value
  ]);
};

const exceptionResponse = () => {
  return Buffer.from([
    0x03, // length field
    0x01, // Unit identifier
    0x97, // Function code
    0x02, // Illegal data address exception
  ]);
};

module.exports = { validResponse, exceptionResponse };
