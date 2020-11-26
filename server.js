'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static('dist'))

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);