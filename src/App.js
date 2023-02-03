import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Searchpage from './components/Search/Searchpage';
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Searchpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
