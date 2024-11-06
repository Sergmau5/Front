import React from 'react';
import './RegisterForm.css';
import UserDataForm from './UserDataForm';
import PetDataForm from './PetDataForm';

function RegisterForm() {
return (
    <div className="main-container">
        <h1 className="highlight">Registrate</h1>
        <h1>a ti y a tu mascota</h1>
        <h3>Para conocer nuestros beneficios</h3>

    <div className="form-container">
        <UserDataForm />
        <PetDataForm />
    </div>

    <div className="button-container">
        <div><a href="/home">Volver</a></div>
        <div><button type="button" onClick={registerUser}>Registrar</button></div>
    </div>
    </div>
);
}

function registerUser() {
  console.log('Registrando usuario...'); // Aquí puedes agregar la lógica de registro
}

export default RegisterForm;
