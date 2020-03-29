const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeExe')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not Connect to MongoDB', err));