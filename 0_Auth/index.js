
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const verify = require('./middlewares/verifyToken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

mongoose.connect(process.env.mongoUrl, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Mongo conectado correctamente');
    }
});

const {login, register, users}  = require('./controllers/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Server</h1>');
})

app.post('/new/user', register);
app.post('/login', login);
app.get('/users', verify.verifyTkn, users);


app.listen(PORT, () => {
    console.log(`Servidor Escuchando en port ${PORT}`);
})

