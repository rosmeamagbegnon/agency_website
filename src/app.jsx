

import Section from './composants/Section';
import Clients from './composants/Clients';
import Management from './composants/Management';
import Unseen from './composants/Unseen';
import Helping from './composants/Helping';
import Head from './composants/Head';

const App = () => {
  return (
    <div>
     
      <Head/>
      <Section />
      <Clients />
      <Management />
      <Unseen />
      <Helping />
    </div> 
  );
};

export default App;
