import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import ContactoApp from "./CHALLENGE-02/ContactoApp";
import React from 'react'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
    <ContactoApp/>
    </React.StrictMode> 
)

