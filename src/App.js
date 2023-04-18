import './App.css';
import AccordionComp from './components/AccordionComp';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import RegistrationForm from './components/RegistrationForm';
import Slider from './components/Slider';
import SocialMediaSection from './components/SocialMediaSection';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slider/>
      <AccordionComp/>
      <SocialMediaSection/>
      <RegistrationForm/>
      <Footer/>
    </div>
  );
}

export default App;
