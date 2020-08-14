if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  console.log('shit');
}
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const indexRouter = require('./routs/index');

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', () => console.error(error));
db.once('open', () => {
  console.log('Connected to mongoose');
});

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
