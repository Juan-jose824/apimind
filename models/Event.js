const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    frecuencia_cardiaca: Number,
    nivel_luz: Number,
    estado: String,
    timestamp: Number
});

module.exports = mongoose.model('Event', eventSchema);
