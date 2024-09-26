import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Management from './composants/Management'
import Clients from './composants/Clients'
import Header from './composants/Header'
import Section from './composants/Section'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Section/>
    <Clients/>
    <Management/>
  </StrictMode>,
)
