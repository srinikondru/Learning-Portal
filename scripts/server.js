'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '10.0.0.161';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);