// index.ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './reset.css'
import Wrap from './wrap'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
root.render(
    <React.StrictMode>
        <Wrap />
    </React.StrictMode>
)

reportWebVitals()
