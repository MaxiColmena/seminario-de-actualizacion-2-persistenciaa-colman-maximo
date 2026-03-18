// ==============================================
// SERVIDOR BACKEND - Gestión de Alumnos
// ==============================================
const express = require('express');
const crypto  = require('crypto'); 
const path    = require('path');

const app  = express();
const PORT = 3000;

// Almacenamiento temporal (Se borra si reinicias el servidor)
const datos = {};

// MIDDLEWARES
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Identificación por Cookie (El "DNI" del navegador)
app.use((req, res, next) => {
    const cookies = {};
    if (req.headers.cookie) {
        req.headers.cookie.split(';').forEach(c => {
            const [clave, valor] = c.trim().split('=');
            cookies[clave] = valor;
        });
    }

    if (cookies.userId) {
        req.userId = cookies.userId;
    } else {
        req.userId = crypto.randomUUID();
        res.cookie('userId', req.userId, {
            maxAge: 365 * 24 * 60 * 60 * 1000,
            httpOnly: false,
            path: '/'
        });
    }

    if (!datos[req.userId]) {
        datos[req.userId] = [];
    }
    next();
});

// ==============================================
// RUTAS DE LA API (Vinculadas al JS del HTML)
// ==============================================

// 1. GET: Cuando el HTML carga o hace cargarDesdeServidor()
app.get('/api/alumnos', (req, res) => {
    // Enviamos el array de este usuario específico
    res.json(datos[req.userId]);
});

// 2. POST: Cuando el usuario pulsa "Registrar Alumno"
app.post('/api/alumnos', (req, res) => {
    const { nombre, edad, nota } = req.body;

    if (!nombre || isNaN(edad) || isNaN(nota)) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }

    // Guardamos en el formato que espera el Frontend: [nombre, edad, nota]
    // Esto es vital para que ordenados.map(([n, e, no]) ... funcione.
    const nuevoAlumno = [nombre, Number(edad), Number(nota)];
    datos[req.userId].push(nuevoAlumno);

    // Respondemos con la lista completa para que la tabla se actualice
    res.json(datos[req.userId]);
});

// 3. DELETE: Cuando el usuario pulsa "Limpiar Base"
app.delete('/api/alumnos', (req, res) => {
    datos[req.userId] = [];
    res.json([]);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});