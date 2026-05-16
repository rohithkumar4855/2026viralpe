import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Container from './layout/Container.jsx'

import './globals.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Container>
      <App />
    </Container>
    <Footer />
  </StrictMode>,
)
