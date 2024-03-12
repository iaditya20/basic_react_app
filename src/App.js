import "./App.css";
import HeroSection from "./components/Hero.js";
import Navigation from "./components/Navigation.js";
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
