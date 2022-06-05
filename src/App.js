import { MovieProvider } from "./Context";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <h1>Starting with an extension</h1>
        <MovieForm />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
