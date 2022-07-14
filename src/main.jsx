import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
