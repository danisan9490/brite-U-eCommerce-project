const express = require('express');
const userRoute = require('./routes/userRoutes');
const productRoute = require('./routes/productRoutes');
const bodyParser = require('body-parser');
const orderRoute = require('./routes/orderRoute')
const cors = require('cors');

const data = require('./data');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
})

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
