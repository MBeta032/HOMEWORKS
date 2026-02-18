import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorld from './HelloWorld.tsx'
import PrintMessage from './PrintMessage'
import Contador from './Contador.tsx'
import Arreglos from './Arreglos.tsx'


ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
        <HelloWorld />
        <PrintMessage message='Como te va?' />
        <PrintMessage message='Soy un mensaje!!!' />  
        <PrintMessage suma = {4}/> 
        <Contador suma = {3}/>
        <Arreglos/>
    </React.StrictMode> 
)

