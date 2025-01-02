const validResponse = () => {
  return Buffer.from([
    0x08, // length field
    0x01, // Unit identifier
    0x10, // Function code
    0x00,
    0x00, // Reference number
    0x00,
    0x00, // AND mask
    0xaa,
    0xaa, // OR mask
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
