import "./App.css";
import DeveloperClub from "./components/DeveloperClub";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Technology from "./components/Technology";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white h-[2737px]">
      <Navigation />
      <Home />
      <DeveloperClub />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;
