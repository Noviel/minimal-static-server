const path = require('path');
const express = require('express');

const app = express();

const HOST = process.env.NODE_IP || '0.0.0.0';
const PORT = process.env.PORT || 9002;

const root = process.cwd();

app.use(express.static(path.resolve(root, './static')));

app.listen(PORT, HOST, () => {
  console.log(`Server started ${HOST}:${PORT}`);
});