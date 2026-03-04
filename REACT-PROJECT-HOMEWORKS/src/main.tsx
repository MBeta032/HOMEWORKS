import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './HelloWorld.tsx'
import PrintMessage from './PrintMessage'
import Contador from './Contador.tsx'
import Arreglos from './Arreglos.tsx'
import ContactoApp from "./CHALLENGE-02/ContactoApp";
import LinkedMusicPage from './CHALLENGE-03/pages/LinkedMusicPage.tsx'
import Challenge03App from './CHALLENGE-03/Challenge03App.tsx'
import StudentApp from './PRACTICA-01/StudentApp.tsx'
import ProductApp from './PRACTICA-02/ProductApp.tsx'
import TurnApp from './PRACTICA-03/TurnApp.tsx'


import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHospital from './PARCIAL-01/AppHospital.tsx'
import PacientesPage from './PARCIAL-01/Pacientes.tsx'
import DoctoresPage from './PARCIAL-01/Doctores.tsx'
import ComitePage from './PARCIAL-01/Comite.tsx'
import HistoryPage from './CHALLENGE-03/pages/HistoryPage.tsx'


ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
        { /*
        <HelloWorld />
        <PrintMessage message='Como te va?' />
        <PrintMessage message='Soy un mensaje!!!' />  
        <PrintMessage suma = {4}/> 
        <Contador suma = {3}/>
        <Arreglos/> 
        <ContactoApp />
        <LinkedMusicPage />
        <StudentApp />
        <ProductApp />
        <TurnApp />
        <Challenge03App /> 
        */}
        <AppHospital />
    </React.StrictMode> 

)

