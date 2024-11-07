import React from 'react';
import './styles/stylehome.css'; // Estilo CSS

const Home = ({ changeView }) => {
return (
    <div>
    <header>
        <nav>
        <button onClick={() => changeView('registro')}>Registro</button>
        <button onClick={() => changeView('consulta')}>Consulta</button>
        </nav>
    </header>

    <main>
        <img src={require('../images/dogge.webp').default} alt="Mascota" />
        <p>
        ¡Bienvenidos a Cheems, el lugar ideal para amantes de las mascotas! Aquí
        encontrarás todo lo que necesitas para el bienestar de tus fieles amigos.
        </p>

        <section className="services">
        <div className="service-box">
            <img src={require('../images/shower.jpg').default} alt="Bañar" />
            <h3>Bañar a tu mascota</h3>
            <p>Mantenemos a tu mascota limpia y feliz con nuestros servicios de baño profesional.</p>
        </div>
        <div className="service-box">
            <img src={require('../images/vaccine.jpg').default} alt="Vacunación" />
            <h3>Vacunación de la mascota</h3>
            <p>Protegemos a tu mascota con las vacunas necesarias para una vida saludable.</p>
        </div>
        <div className="service-box">
            <img src={require('../images/school.png').default} alt="Guardería" />
            <h3>Guardería para mascota</h3>
            <p>Cuidamos de tu mascota mientras tú no puedes hacerlo, en un ambiente seguro y amigable.</p>
        </div>
        </section>
    </main>
    </div>
);
};

export default Home;
