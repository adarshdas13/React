import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PokemonGrid from "./components/pokemongrid";


function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#171717]">
      <Navbar />

      <main>
        <Hero />
        <PokemonGrid />
      </main>
    </div>
  );
}

export default App;