const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

const port = process.env.PORT || 3333;
const host = process.env.HOST || '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});

app.listen(port);