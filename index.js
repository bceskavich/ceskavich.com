const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(2424, () => console.log('Live at http://localhost:2424'));
