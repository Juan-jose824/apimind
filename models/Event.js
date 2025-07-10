const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    pulso: Number,
    aceleracion: Number,
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
