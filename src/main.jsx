import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GiftExpertApp from './GifExpertApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>,
)
