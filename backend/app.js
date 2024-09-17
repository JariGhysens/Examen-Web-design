const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const gebruikerRouter = require('./routes/gebruiker');
const ticketRouter = require('./routes/ticket')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS-configuratie
app.use(cors({
  origin: 'http://localhost:5173', // De URL van je React-applicatie
  methods: 'GET,PUT,POST,DELETE,PATCH',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  credentials: true,
}));

app.use('/gebruiker', gebruikerRouter);
app.use('/tickets', ticketRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
