const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT =  3000;

app.use(bodyParser.json());
app.use('/receipts', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
