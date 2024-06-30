import './App.css';
import Header from './Header';
import Home from './Home';
import NavBar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <NavBar />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/cart" element={
          <Cart />
        } />
      </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
