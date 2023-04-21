import "./App.css";
import CallSection from "./components/CallSection/CallSection";
//import AccordionComp from './components/AccordionComp';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NewNavbar from "./components/NewNavbar/NewNavbar";

import RegistrationForm from "./components/RegistrationForm";
import Slider from "./components/Slider";
import SocialMediaSection from "./components/SocialMediaSection";

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <NewNavbar />
      <Slider />
      <CallSection />
      <RegistrationForm />
      {/* <SocialMediaSection /> */}

      <Footer />
    </div>
  );
}

export default App;
