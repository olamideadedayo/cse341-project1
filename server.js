

const express = require('express');
const app = express();
const mongodb = require('./db/connect');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', require('./routes'));

// Add your routes here later, for example:
// app.use('/contacts', require('./routes/contacts'));

app.use('/contacts', require('./routes/contacts'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});