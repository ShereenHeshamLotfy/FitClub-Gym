import './App.css'; 
import Hero from './Componants/Hero.jsx';
import Programs from './Componants/Programs';
import Reasons from './Componants/Reasons';
import Plans from './Componants/Plans';
import Testimonials from './Componants/Testimonials';
import Join from './Componants/Join';
import Footer from './Componants/Footer';
function App() {
  return (
    <div className="App">
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
    </div>
  );
}

export default App;
