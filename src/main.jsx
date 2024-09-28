import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import HeroSection from './composants/HeroSection'
import Footer from './composants/Footer';
import Caring from './composants/caring';
import Header from './composants/Header';
import Section from './composants/Section';
import Clients from './composants/Clients';
import Management from './composants/Management';


import Smith from './composants/smith'
import Design from './composants/design'
import Unseen from './composants/Unseen'
import Helping from './composants/Helping'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Section/>
    <Clients/>
    <Management/>
    <Unseen/>
    <Helping/>
    <Design/> 
    <Smith/>
    <Caring/>  
    <HeroSection/>
    <Footer/>
  </StrictMode>,
)
