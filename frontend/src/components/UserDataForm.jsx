import React from 'react';
import profileIcon from '../images/profile.svg';
import idIcon from '../images/id.svg';
import phoneIcon from '../images/phone.svg';
import passwordIcon from '../images/numbers.svg';


function UserDataForm() {
return (
    <div className="column">
    <h2>Tus datos</h2>
    <div className="input-group">
        <img src={profileIcon} alt="Profile" />
        <input type="text" id="name" placeholder="Nombre" />
    </div>
    <div className="input-group">
        <img src={idIcon} alt="ID" />
        <input type="number" id="id" placeholder="Nro. documento" />
    </div>
    <div className="input-group">
        <img src={phoneIcon} alt="Phone" />
        <input type="number" id="phone" placeholder="Teléfono de contacto" />
    </div>
    <div className="input-group">
        <img src={passwordIcon} alt="Password" />
        <input type="password" id="password" placeholder="Contraseña" />
    </div>
    </div>
);
}

export default UserDataForm;