

import Section from './composants/Section';
import Clients from './composants/Clients';
import Management from './composants/Management';
import Unseen from './composants/Unseen';
import Helping from './composants/Helping';
import Head from './composants/Head';
import Design from './composants/design';
import Smith from './composants/smith';
import Footer from './composants/footer';
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


