import { MovieProvider } from "./context/Context";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  return (
    <MovieProvider>
      <div className="App">
       <h3>Movie Helper</h3>
        <MovieForm />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
