import "./index.css";
import Counter from "./components/Counter";

// the user can increase/decrease the counter
// dumb component
// utility function which holds the logic to increase/decrease

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
