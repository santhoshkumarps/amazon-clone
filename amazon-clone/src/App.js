import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/product/checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase-config';
import { useStateValue } from './components/context/StateProvider';
import Payment from './components/product/checkout/payment/Payment';

function App() {

  const[{},dispatch] = useStateValue();

  useEffect(() => {
    //will run only once when the app component loads...
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else{
        //the user just logged out
          dispatch({
            type : 'SET_USER',
            user: null
          })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login'
                  element={<>
                    <Login/>
                  </>}
                  />
          <Route path='/checkout'
                 element={
                  <>
                    <Header />
                    <Checkout/>
                  </>}/>
          <Route path='/payment'
                 element={
                  <>
                    <Header />
                    <Payment/>
                  </>}/>
          <Route path='/' 
                 element={
                    <>
                      <Header />
                      <Home />
                    </>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
