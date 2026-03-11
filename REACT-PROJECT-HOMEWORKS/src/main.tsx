import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Challenge03App from './CHALLENGE-03/Challenge03App.tsx'


ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
    <Challenge03App />
    </React.StrictMode> 

)

