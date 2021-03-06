const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts.js');
const app = express();
const path = require('path');
require('dotenv').config()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

if (process.env.NODE_ENV === "production") {

  app.use(express.static("../client/build"))
  app.get("*",(req,res) => res.sendFile(path.resolve(__dirname, "../client", "build", "index.html")))
}

mongoose.set('useFindAndModify', false);

console.log(process.env.MONGODB_URI)
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget",
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

app.listen(PORT, () =>
  console.log(`🌎 ==> API server now on port ${PORT}!`)
);