import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Management from './Management'
import Clients from './Clients'
import Header from '../composants/Header'
import Section from './Section'
import Unseen from './Unseen'
import Helping from './Helping'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Section/>
    <Clients/>
    <Management/>
    <Unseen/>
    <Helping/>
  </StrictMode>,
)
