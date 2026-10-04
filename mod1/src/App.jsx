import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ComingSoon from "./components/Comingsoon";

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <main className="mx-auto max-w-7xl">
        <section className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Charizard #0006"
            desc="Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures."
            btn="View Evolution"
            img="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
          />

          <Card
            title="Venusaur #0003"
            desc="After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon."
            btn="View Evolution"
            img="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png"
          />

          <Card
            title="Blastoise #0009"
            desc="It crushes its foe under its heavy body to cause fainting. It has jet nozzles on its shell."
            btn="View Evolution"
            img="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png"
          />
        </section>

        <section className="px-6 pb-6">
          <ComingSoon />
        </section>
      </main>
    </div>
  );
}

export default App;
