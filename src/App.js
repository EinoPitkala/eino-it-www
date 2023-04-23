import './App.css';
import LandingBlock from './modules/LandingBlock';
import NavBar from './modules/NavBar';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <LandingBlock />
      </BrowserRouter>
    </div>
  );
}

export default App;
