import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import Posts from './components/Posts.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h1>Zustand UseCase</h1>
        <Counter />
      </main>
      <Posts/>
    </>
  );
}

export default App;