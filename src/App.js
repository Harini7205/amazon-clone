import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Payment from './components/Payment';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {auth} from './firebase/firebase';
import React,{useEffect} from 'react';
import { useStateValue } from './config/stateProvider';

function App() {
  const [,dispatch]=useStateValue();
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(authUser=>{
      console.log("The user is",authUser);
      if (authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    return ()=>{
      unsubscribe();
    }
  },[dispatch])
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <NavBar />
          <Home />
          <Footer />
          </>
        } />
        <Route path="/login" element={
          <SignIn />
        } />
        <Route path="/cart" element={
          <>
          <Header />
          <NavBar />
          <Cart />
          <Footer />
          </>
        } />
        <Route path="/payment" element={
          <>
          <Payment />
          </>
        } />
      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
