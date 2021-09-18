import Axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import '../GalleryList/GalleryList';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  //run getGallery() on load
  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    Axios.get('/gallery') //get the gallery route
      .then( (response) => { //log and set response
        console.log(response.data);
        setGalleryList(response.data);
      })
      .catch(function (error) { //catch an error
        console.log('Error on GET request.', error);
      });
  };

  const updateLikeCount = () => {
    console.log('in updateLikeCount');
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
      <GalleryList 
        galleryList = {galleryList}/>
      </div>
    );
}

export default App;
