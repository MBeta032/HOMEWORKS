import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import React from 'react'
import "./index.css"
import ReactDOM from 'react-dom/client'
import LibroApp from './LibroApp'

ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
    < LibroApp/>
    </React.StrictMode> 

)

