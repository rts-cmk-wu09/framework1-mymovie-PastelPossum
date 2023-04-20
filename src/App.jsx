import "./App.css";
import HeadingOne from "./components/headingOne";
import MovieCard from "./templates/MovieCard";

function App() {
  return (
    <div className="App">
      <header>
        <HeadingOne />
      </header>
      <main>
        <section>
          <MovieCard />
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
