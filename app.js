const express = require('express');
const app = express();
const port = 2000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});


app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

mongoose.connect('mongodb+srv://ahhasa842_db_user:7BbWolDOHL6bGA9Y@cluster0.klqnlhj.mongodb.net/?appName=Cluster0').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
