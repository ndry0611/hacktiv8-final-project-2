const express = require('express');
const dotenv = require('dotenv');
const router = require('./routers/index.js');
const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT);