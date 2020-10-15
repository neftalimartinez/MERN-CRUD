const express = require('express');
const morgan = require('morgan')
const path = require('path')

const { mongoose } = require('./database')


const app = express();

//settings
app.set('port', process.env.PORT || 3000)

//MIddlewares
app.use(morgan('dev'));
app.use(express.json())

// ROutes
app.use('/api/task', require('./routes/task.routes'))

// static files
app.use(express.static(path.join(__dirname, 'public')))

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})