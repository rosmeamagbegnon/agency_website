
import Header from './composants/Header';
import Section from './composants/Section';
import Clients from './composants/Clients';
import Management from './composants/Management';
import Unseen from './composants/Unseen';
import Helping from './composants/Helping';
import Blog from './composants/Blog';

const App = () => {
  return (
    <div>
      <Blog/>
      <Header />
      <Section />
      <Clients />
      <Management />
      <Unseen />
      <Helping />
    </div> 
  );
};

export default App;
