const express = require('express');
const cors = require('cors');

const data = require('./data');

const app = express();
const PORT = 3001;

app.use(cors());


app.get("/api/products", (req, res) => {

  res.send(data.products);
})


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})