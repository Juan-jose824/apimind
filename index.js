const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Modelo
const Event = require('./models/Event');

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Ruta para guardar evento
app.post('/eventos', async (req, res) => {
    try {
        const nuevoEvento = new Event(req.body);
        await nuevoEvento.save();
        res.status(201).json({ mensaje: 'Evento guardado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todos los eventos
app.get('/eventos', async (req, res) => {
    try {
        const eventos = await Event.find().sort({ fecha: -1 });
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
