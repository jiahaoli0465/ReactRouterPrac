import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chip from './components/Chip';
import Sardine from './components/Sardine';
import Soda from './components/Soda';
import Home from './components/Home';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chip" element={<Chip/>} />
          <Route path="/soda" element={<Soda/>} />
          <Route path="/sardine" element={<Sardine/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
