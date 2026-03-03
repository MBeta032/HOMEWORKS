import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './HelloWorld.tsx'
import PrintMessage from './PrintMessage'
import Contador from './Contador.tsx'
import Arreglos from './Arreglos.tsx'
import ContactoApp from "./CHALLENGE-02/ContactoApp";

import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import LinkedMusicPage from './CHALLENGE-03/pages/LinkedMusicPage.tsx'


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
        <ContactoApp />*/ }
        <LinkedMusicPage />
    </React.StrictMode> 

)

