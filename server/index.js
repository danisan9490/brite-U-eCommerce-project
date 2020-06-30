const express = require('express');
const userRoute = require('./routes/userRoutes');
const bodyParser = require('body-parser')
const cors = require('cors');

const data = require('./data');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
