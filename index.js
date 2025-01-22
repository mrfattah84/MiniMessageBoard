const path = require('node:path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const showMessagesRoute = require('./routes/showMessages');
app.use('/', showMessagesRoute);

const newMessageRoute = require('./routes/newMessage');
app.use('/new', newMessageRoute);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
