import React from 'react';
import catIcon from '../images/cat.svg';
import petIcon from '../images/pets.svg';
import ageIcon from '../images/numbers.svg';
import './RegisterForm.css';

function PetDataForm() {
return (
    <div className="column">
    <h2>Datos de tu mascota</h2>
    <div className="input-group">
        <img src={catIcon} alt="Cat" />
        <input type="text" id="petname" placeholder="Nombre" />
    </div>
    <div className="input-group">
        <img src={petIcon} alt="Pet Type" />
        <select>
            <option>Perro</option>
            <option>Gato</option>
            <option>Ave</option>
            <option>Otro</option>
        </select>
    </div>
    <div className="input-group">
        <img src={ageIcon} alt="Age" />
        <input type="number" id="age" placeholder="Edad" />
    </div>
    </div>
);
}

export default PetDataForm;
