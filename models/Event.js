const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    frecuencia_cardiaca: Number,
    nivel_luz: Number,
    estado: String,
    hrv: Number,
    actividad: String,
    timestamp: Number,
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', eventSchema);
