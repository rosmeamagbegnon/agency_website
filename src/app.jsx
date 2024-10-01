

import Section from './composants/Section';
import Clients from './composants/Clients';
import Management from './composants/Management';
import Unseen from './composants/Unseen';
import Helping from './composants/Helping';
import Head from './composants/Head';
import Footer from './composants/footer';
import Design from './composants/Design';
import Smith from './composants/Smith';
import Caring from './composants/Caring';
import HeroSection from './composants/HeroSection';
const App = () => {
  return (
    <div>
     
      <Head/>
      <Section />
      <Clients />
      <Management />
      <Unseen />
      <Helping />
      <Design/> 
      <Smith/>  
      <Caring/>
      <HeroSection/>
      <Footer/>
    </div> 
  );
};

export default App;


