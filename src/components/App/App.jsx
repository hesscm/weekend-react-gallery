import Axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    Axios.get('/gallery')
      .then( (response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
