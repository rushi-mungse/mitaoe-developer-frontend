import "./App.css";
import DeveloperClub from "./components/DeveloperClub";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Technology from "./components/Technology";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      />
      <div className="bg-white overflow-y-visible">
        <Navigation />
        <Home />
        <DeveloperClub />
        <Technology />
        <Footer />
      </div>
    </>
  );
}

export default App;
