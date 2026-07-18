const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});


app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});