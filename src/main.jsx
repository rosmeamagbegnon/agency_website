import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Footer from './composants/footer';
import HeroSection from './composants/HeroSection'
import Caring from './composants/caring'
import Smith from './composants/smith'
import Design from './composants/design'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Design/> 
   <Smith/>  
   <Caring/>
  <HeroSection/>
  <Footer/>
  </StrictMode>,
)
