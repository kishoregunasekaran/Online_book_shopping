const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

const authRoute = require('./routes/auth');
app.use('/api', authRoute);

const booksRoute = require('./routes/books');
app.use('/api/books', booksRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
