const parseRequest = (data) => {
  const functionCode = data[7];

  console.log(`functionCode: ${functionCode}`);

  let response = [];

  if (functionCode == 1) {
    console.log("*** FC1 - Read Coils ***");

    response = getFC1Response();
  } else if (functionCode == 2) {
    console.log("*** FC2 - Read Discrete Inputs ***");

    response = getFC2Response();
  } else if (functionCode == 3) {
    console.log("*** FC3 - Read Multiple Registers ***");

    response = getFC3Response();
  } else if (functionCode == 4) {
    console.log("*** FC4 - Read Input Registers ***");

    response = getFC4Response();
  } else if (functionCode == 5) {
    console.log("*** FC5 - Write Coil ***");

    response = getFC5Response();
  } else if (functionCode == 6) {
    console.log("*** FC6 - Write Single Register ***");

    response = getFC6Response();
  } else if (functionCode == 15) {
    console.log("*** FC15 - Write Multiple Coils ***");

    response = getFC15Response();
  } else if (functionCode == 16) {
    console.log("*** FC16 - Write Multiple Registers ***");

    response = getFC16Response();
  } else if (functionCode == 22) {
    console.log("*** FC22 - Mask Write Register ***");

    response = getFC22Response();
  } else if (functionCode == 23) {
    console.log("*** FC23 - Read/Write Multiple Registers ***");

    response = getFC23Response();
  }

  // Concatenate buffers as an array
  response = Buffer.concat([
    Buffer.from([
      0x00,
      0x00, // transaction identifier
      0x00,
      0x00, // protocol identifier
      0x00,
    ]),
    response, // Add the response buffer here
  ]);

  return response;
};

module.exports = { parseRequest };

const getFC1Response = () => {
  return (response = Buffer.from([
    0x04, // length field
    0x01, // Unit identifier
    0x01, // Function code
    0x01, // Byte count
    0x12, // Bit values
  ]));
};

const getFC2Response = () => {
  return (response = Buffer.from([
    0x04, // length field
    0x01, // Unit identifier
    0x02, // Function code
    0x01, // Byte count
    0x12, // Bit values
  ]));
};

const getFC3Response = () => {
  return (response = Buffer.from([
    0x07, // length field
    0x01, // Unit identifier
    0x03, // Function code
    0x04, // Byte count
    0x12,
    0x34, // Value of reg 0 (split into two bytes)
    0x23,
    0x45, // Value of reg 1 (split into two bytes)
  ]));
};

const getFC4Response = () => {
  return (response = Buffer.from([
    0x07, // length field
    0x01, // Unit identifier
    0x04, // Function code
    0x04, // Byte count
    0x12,
    0x34, // Value of reg 0 (split into two bytes)
    0x23,
    0x45, // Value of reg 1 (split into two bytes)
  ]));
};

const getFC5Response = () => {
  return (response = Buffer.from([
    0x06, // length field
    0x01, // Unit identifier
    0x05, // Function code
    0x00,
    0x01, // Reference number
    0xff,
    0x00, // Value
  ]));
};

const getFC6Response = () => {
  return (response = Buffer.from([
    0x06, // length field
    0x01, // Unit identifier
    0x06, // Function code
    0x00,
    0x01, // Reference number
    0x12,
    0x34, // Register value
  ]));
};

const getFC15Response = () => {
  return (response = Buffer.from([
    0x06, // length field
    0x01, // Unit identifier
    0x0f, // Function code
    0x00,
    0x00, // Reference number
    0x00,
    0x10, // Bit count
  ]));
};

const getFC16Response = () => {
  return (response = Buffer.from([
    0x06, // length field
    0x01, // Unit identifier
    0x10, // Function code
    0x00,
    0x00, // Reference number
    0x00,
    0x02, // Word count
  ]));
};

const getFC22Response = () => {
  return (response = Buffer.from([
    0x08, // length field
    0x01, // Unit identifier
    0x10, // Function code
    0x00,
    0x00, // Reference number
    0x00,
    0x00, // AND mask
    0xaa,
    0xaa, // OR mask
  ]));
};

const getFC23Response = () => {
  return (response = Buffer.from([
    0x07, // length field
    0x01, // Unit identifier
    0x17, // Function code
    0x04, // Byte count
    0x00,
    0x04, // Reg1 value
    0x56,
    0x78, // Reg2 value
  ]));
};