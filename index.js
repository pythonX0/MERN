require('dotenv').config();
const port = process.env.PORT;
const app = require("./app");

// about-me
// bootcamp

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
