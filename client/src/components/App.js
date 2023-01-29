import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import CoffeeContainer from './CoffeeContainer';
import CoffeeDetails from './CoffeeDetail';
import Edit from './Edit';
import Login from './Login';
import Navbar from './Navbar';
import Profile from './Profile';
import Reviews from './Reviews';
import Signup from './Signup';

// import NavBar from './components/NavBar'
// import { Route, Routes } from "react-router-dom";

function App() {

  const [coffees, setCoffee] = useState([])
  const [user, setUser] = useState(null)
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState('')

  
  useEffect(() => {
    fetch("/profile").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/coffee")
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setCoffee(data);
            
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }, []);



  useEffect(() => {
    fetch("/reviews")
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setReviews(data);
          
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }, []);

  function addReview(newRev) {
    setReviews([...reviews, newRev])
  }

  function handleLogin(user){
    setUser(user)
  }





  return (
    <div className="App">
      <Navbar coffees={coffees} user={user} setUser={setUser}/>
      <Routes>
        <Route exact path='/' element={<Login onLogin={handleLogin}/>} />
        <Route exact path='/signup' element={<Signup setUser={setUser} />} />
        <Route exact path="/coffee" element={<CoffeeContainer coffees={coffees} user={user} />} />
        <Route exact path="coffee/:id" element={<CoffeeDetails addReview={addReview} user={user} coffees={coffees} reviews={reviews}/>} />
        <Route exact path="user/:id" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;