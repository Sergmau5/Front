const db = require('../config/db');

const createTables = () => {
    const sqlUser = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(50),
            documento VARCHAR(20) UNIQUE,
            telefono VARCHAR(15),
            contrasena VARCHAR(255)
        );
    `;

    const sqlPet = `
        CREATE TABLE IF NOT EXISTS mascotas (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(50),
            tipo VARCHAR(50),
            edad INT,
            usuario_id INT,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        );
    `;

    db.query(sqlUser, (err) => {
        if (err) throw err;
    });

    db.query(sqlPet, (err) => {
        if (err) throw err;
    });
};

createTables();

module.exports = db;
