var connect = require('connect');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app=express();
const PORT=process.env.PORT || 8085;

const routes = require('./routes/api');


mongoose.connect('mongodb+srv://demo:hBjdsP9rTQaau7X@cluster0.jrdfh.mongodb.net/metting?retryWrites=true&w=majority',  
    {useNewUrlParser: true,  
    useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is Connected!!!');
});



app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, () => console.log(`Server started on ${PORT}`));