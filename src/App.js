import './App.css';
import Header from './Header';
import Home from './Home';
import NavBar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';
import SignIn from './SignIn';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {auth} from './firebase';
import React,{useEffect} from 'react';
import { useStateValue } from './stateProvider';

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
      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
