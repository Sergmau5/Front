import React, { useState } from 'react';
import '../components/styles/styleregistro.css';

const Registro = () => {
const [name, setName] = useState('');
const [id, setId] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [petName, setPetName] = useState('');
const [petType, setPetType] = useState('');
const [petAge, setPetAge] = useState('');

const handleRegister = () => {
    console.log('Registro completado');
};

return (
    <div className="main-container">
    <h1 className="highlight">Regístrate</h1>
    <h1>a ti y a tu mascota</h1>
    <h3>Para conocer nuestros beneficios</h3>

    <div className="form-container">
        <div className="column">
        <h2>Tus datos</h2>
        <div className="input-group">
            <img src={require('../images/profile.svg').default} alt="Icono perfil" />
            <input
            type="text"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="input-group">
            <img src={require('../images/id.svg').default} alt="Icono documento" />
            <input
            type="number"
            id="id"
            placeholder="Nro. documento"
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
        </div>
        <div className="input-group">
            <img src={require('../images/phone.svg').default} alt="Icono teléfono" />
            <input
            type="number"
            id="phone"
            placeholder="Teléfono de contacto"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <div className="input-group">
            <img src={require('../images/numbers.svg').default} alt="Icono contraseña" />
            <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        </div>

        <div className="column">
        <h2>Datos de tu mascota</h2>
        <div className="input-group">
            <img src={require('../images/cat.svg').default} alt="Icono mascota" />
            <input
            type="text"
            id="petname"
            placeholder="Nombre"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            />
        </div>
        <div className="input-group">
            <img src={require('../images/pets.svg').default} alt="Icono tipo mascota" />
            <select
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            >
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Otro">Otro</option>
            </select>
        </div>
        <div className="input-group">
            <img src={require('../images/numbers.svg').default} alt="Icono edad mascota" />
            <input
            type="number"
            id="age"
            placeholder="Edad"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            />
        </div>
        </div>
    </div>

    <div className="button-container">
        <div><a href="/">Volver</a></div>
        <div><button type="button" onClick={handleRegister}>Registrar</button></div>
    </div>
    </div>
);
};

export default Registro;
