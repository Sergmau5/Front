import React from 'react';

const Consulta = ({ changeView }) => {
return (
    <div>
    <h2>Consulta de Cita</h2>
    <p>Consulta la información de tu mascota y cita.</p>
    <button onClick={() => changeView('home')}>Volver al Home</button>
    </div>
);
};

export default Consulta;
