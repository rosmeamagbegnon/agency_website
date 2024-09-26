import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Footer from './composants/footer';
import HeroSection from './composants/HeroSection'
import Caring from './composants/caring'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Caring/>
  <HeroSection/>
  <Footer/>
  </StrictMode>,
)
