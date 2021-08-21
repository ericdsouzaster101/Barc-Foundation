const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// routes
const routes = require('./routes/routes.js');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// connecting to database
mongoose.connect(
  'mongodb+srv://eric:test@123@cluster0.vwtix.mongodb.net/barc-foundation?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(routes, (err) => {
  console.log(err);
});

app.listen(PORT, (err) => {
  console.log('serving on port 5000');
});
