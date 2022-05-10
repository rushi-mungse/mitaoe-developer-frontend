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
        <section className="mt-4 px-2">
          <h1 className="text-2xl font-bold text-orange-500">About </h1>
          <h2 className="text-lg font-bold ">Rushikesh Mungse</h2>
          <span>Full-Stack Developer</span>
          <div className="mt-4">
            <span className="text-lg font-bold">Email : </span>
            <a
              href="mailto:rmmungse@mitaoe.ac.in"
              className="text-blue-500 text-lg"
            >
              rmmungse@mitaoe.ac.in
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
