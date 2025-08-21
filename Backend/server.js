const express = require('express');
const app = express();
const cors = require('cors');
const body = require('body-parser');
const db=require('./config/db')
require('dotenv').config();
const registeroutes=require("./routes/register")
const taskroutes=require("./routes/task")
app.use(cors());
app.use(body.json());
db();
app.use("/api/auth",registeroutes)
app.use("/api/task",taskroutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Database is running at the port ${PORT}`);
});
