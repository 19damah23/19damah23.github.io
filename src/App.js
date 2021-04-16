import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="overflow-y-auto">
      <Home />
      </div>
    </div>
  );
}

export default App;
