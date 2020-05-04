const app = require('./app');

const port = process.env.PORT || 3333;
const host = process.env.HOST || '0.0.0.0';
app.listen(port);