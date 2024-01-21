import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection
        text1={"100 Thousand Songs, ad-free"}
        text2={"Over thousands podcast episodes"}
      />
    </div>
  );
}

export default App;
