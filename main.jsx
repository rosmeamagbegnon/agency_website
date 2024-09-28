import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import HeroSection from './HeroSection'
import Footer from './Footer';
import Caring from './caring';
import Header from './Header';
import Section from './Section';
import Clients from './Clients';
import Management from '.Management';


import Smith from './smith'
import Design from './design'
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
    <Design/> 
    <Smith/>
    <Caring/>  
    <HeroSection/>
    <Footer/>
  </StrictMode>,
)
