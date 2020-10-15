const mongoose = require('mongoose');

const URI = 'mongodb+srv://<user>:<pass>@<mongodbclusterurl>/<dbname>?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;

