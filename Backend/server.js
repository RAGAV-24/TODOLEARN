const express = require('express');
const app = express();
const cors = require('cors');
const body = require('body-parser');
const db=require('./config/db')
require('dotenv').config();

app.use(cors());
app.use(body.json());
db();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Database is running at the port ${PORT}`);
});
