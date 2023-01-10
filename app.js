const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});




app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) => {
    res.render('home');
})
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campgrounds.find({})
    res.render('campgrounds/index', { campgrounds })
})
app.listen(3000, () => {
    console.log('Serving on port 3000')
})