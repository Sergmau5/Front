import React, { useState } from 'react';
import Home from './components/Home';
import Registro from './components/Registro';
import Consulta from './components/Consulta';

function App() {
const [currentView, setCurrentView] = useState('home');

const changeView = (view) => {
    setCurrentView(view);
};

return (
    <div>
    {currentView === 'home' && <Home changeView={changeView} />}
    {currentView === 'registro' && <Registro changeView={changeView} />}
    {currentView === 'consulta' && <Consulta changeView={changeView} />}
    </div>
);
}

export default App;
