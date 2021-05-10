const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();
const app = express();

app.use('/api/config', require('./routes/config.routes'));

app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const DB_URI = process.env.DB_URI;

async function start() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, HOST,() => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start()
  .then(() => {
    console.log('SUCCESS');
  });

