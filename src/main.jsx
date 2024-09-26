import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import HeroSection from './composants/HeroSection'
import Footer from './composants/footer';
import Caring from './composants/caring';
import Header from './composants/Header';
import Section from './composants/Section';
import Clients from './composants/Clients';
import Management from './composants/Management';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Section/>
    <Clients/>
    <Management/>
    <Caring/>
    <HeroSection/>
    <Footer/>
  </StrictMode>,
)
