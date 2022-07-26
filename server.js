const app = require("./app");
const dotenv = require("dotenv");

//configuring path for the .env file
dotenv.config({ path: `${__dirname}/.env` });

//Starting server
app.listen(process.env.PORT, () => {
  console.log(`Server is start listening to port ${process.env.PORT}`);
});
