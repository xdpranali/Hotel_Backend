const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome! To My Hotel...')
});

//Import router file
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

//use router
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(PORT, ()  => {
    console.log('listening on port no 3000')
    }
)

