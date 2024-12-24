const getBaseResponse = (req, res) => {
  res.send("Hello, World!");
};

const getInfoResponse = (req, res) => {
  const response = {
    message: "hello from server's info endpoint!!",
  };
  res.status(200).json(response);
};

const postInfoResponse = (req, res) => {
  const { name } = req.body;

  console.log(`name received: ${name}`);

  const response = {
    message: `hello ${name} from server`,
  };

  res.status(201).json(response);
};

const getFileContent = (req, res) => {
  const file = fs.readFile("./data.xml", (err, file) => {
    if (err) res.status(404).end("Not found!!");
    else {
      res.set("Content-Type", "application/xml");
      console.log(file);
      res.send(file);
    }
  });
};

module.exports = {
  getBaseResponse,
  getInfoResponse,
  postInfoResponse,
  getFileContent,
};
