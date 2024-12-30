const parseRequest = (data) => {
  const body = [];

  for (let i = 6; i < data.length; i++) {
    body.push(data[i]);
  }

  const functionCode = body[1];

  if (functionCode == 3) {
    console.log("*** FC3 - Read Multiple Registers ***");

    const response = Buffer.from([
      0x00,
      0x00, // transaction indentifier
      0x00,
      0x00, // protocol indentifier
      0x00,
      0x07, // length field
      0x01, // Unit identifier
      0x03, // Function code
      0x04, // Byte count
      0x12,
      0x34, // Value of reg 0 (split into two bytes)
      0x23,
      0x45, // Value of reg 1 (split into two bytes)
    ]);

    return response;
  }

  return data;
};

module.exports = { parseRequest };
