const db = require('../models/userModel');

exports.registerUserAndPet = (req, res) => {
    const { nombre, documento, telefono, contrasena, petName, petType, petAge } = req.body;

    const sqlUser = 'INSERT INTO usuarios (nombre, documento, telefono, contrasena) VALUES (?, ?, ?, ?)';
    db.query(sqlUser, [nombre, documento, telefono, contrasena], (err, result) => {
        if (err) return res.status(500).send(err);

        const userId = result.insertId;
        const sqlPet = 'INSERT INTO mascotas (nombre, tipo, edad, usuario_id) VALUES (?, ?, ?, ?)';
        db.query(sqlPet, [petName, petType, petAge, userId], (err) => {
            if (err) return res.status(500).send(err);
            res.status(200).send('Usuario y mascota registrados exitosamente');
        });
    });
};

exports.getUserByDocument = (req, res) => {
    const { documento } = req.params;

    const sql = `
        SELECT usuarios.nombre AS usuarioNombre, documento, telefono, mascotas.nombre AS mascotaNombre, tipo, edad
        FROM usuarios
        JOIN mascotas ON usuarios.id = mascotas.usuario_id
        WHERE usuarios.documento = ?;
    `;

    db.query(sql, [documento], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};
