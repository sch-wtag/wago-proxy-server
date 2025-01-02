const fc1 = require("../service/FC1");
const fc2 = require("../service/FC2");
const fc3 = require("../service/FC3");
const fc4 = require("../service/FC4");
const fc5 = require("../service/FC5");
const fc6 = require("../service/FC6");
const fc15 = require("../service/FC15");
const fc16 = require("../service/FC16");
const fc22 = require("../service/FC22");
const fc23 = require("../service/FC23");

const parseRequest = (data) => {
  const functionCode = data[7];

  console.log(`functionCode: ${functionCode}`);

  let response = [];

  if (functionCode == 1) {
    console.log("*** FC1 - Read Coils ***");

    response = fc1.validResponse();
    // response = fc1.exceptionResponse();
  } else if (functionCode == 2) {
    console.log("*** FC2 - Read Discrete Inputs ***");

    response = fc2.validResponse();
    // response = fc2.exceptionResponse();
  } else if (functionCode == 3) {
    console.log("*** FC3 - Read Multiple Registers ***");

    response = fc3.validResponse();
    // response = fc3.exceptionResponse();
  } else if (functionCode == 4) {
    console.log("*** FC4 - Read Input Registers ***");

    response = fc4.validResponse();
    // response = fc4.exceptionResponse();
  } else if (functionCode == 5) {
    console.log("*** FC5 - Write Coil ***");

    response = fc5.validResponse();
    // response = fc5.exceptionResponse();
  } else if (functionCode == 6) {
    console.log("*** FC6 - Write Single Register ***");

    response = fc6.validResponse();
    // response = fc6.exceptionResponse();
  } else if (functionCode == 15) {
    console.log("*** FC15 - Write Multiple Coils ***");

    response = fc15.validResponse();
    // response = fc15.exceptionResponse();
  } else if (functionCode == 16) {
    console.log("*** FC16 - Write Multiple Registers ***");

    response = fc16.validResponse();
    // response = fc16.exceptionResponse();
  } else if (functionCode == 22) {
    console.log("*** FC22 - Mask Write Register ***");

    response = fc22.validResponse();
    // response = fc22.exceptionResponse();
  } else if (functionCode == 23) {
    console.log("*** FC23 - Read/Write Multiple Registers ***");

    response = fc23.validResponse();
    // response = fc23.exceptionResponse();
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
