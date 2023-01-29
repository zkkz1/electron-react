import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scan/Scripts/jquery-1.6.4.min.js'
import './scan/Scripts/jquery.signalR-2.2.3.min.js'
import './scan/Resources/fujitsu.fiscanner.initiate.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
