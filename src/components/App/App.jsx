import Axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import '../GalleryList/GalleryList';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  const [newPicturePath, setNewPicturePath] = useState('');
  const [newPictureDecription, setNewPictureDescription] = useState('');
  const [galleryList, setGalleryList] = useState([]);

  //run getGallery() on load
  useEffect(() => {
    getGallery();
  }, []);

  //axios GET function
  const getGallery = () => {
    Axios.get('/gallery') //get the gallery route
      .then( (response) => { //log and set response
        console.table(response.data);
        setGalleryList(response.data);
      })
      .catch(function (error) { //catch an error
        console.log('Error on GET request.', error);
      });
  };

  //axios PUT function to update like count
  const updateLikeCount = (likeID) => {
    console.log('in updateLikeCount');
    Axios.put(`/gallery/like/${likeID}`)
    .then( (response) => { //log and set response
      console.log(response);
      getGallery();
    })
    .catch(function (error) { //catch an error
      console.log('Error on PUT request.', error);
    });
};

//axios POST function to add a new image
const addAnImage = (event) => {
  event.preventDefault();
  console.log('in addAnImage');
  Axios({
    method: 'POST',
    url: '/gallery', 
    data: {
      path: newPicturePath,
      description: newPictureDecription
    }
  })
  .then( (response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const deletePicture = (deleteID) => {
  console.log('in deletePicture', deleteID);
  Axios({
    method: 'DELETE',
    url: `/gallery/${deleteID}`
  })
  .then( (response) => { //log and set response
    console.log(response);
    getGallery();
  })
  .catch(function (error) { //catch an error
    console.log('Error on DELETE request.', error);
  });
};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>{newPicturePath}</p>
        <GalleryForm 
          addAnImage = {addAnImage}
          setNewPicturePath = {setNewPicturePath}
          setNewPictureDescription = {setNewPictureDescription}
          

        />
        <GalleryList 
          galleryList = {galleryList}
          updateLikeCount = {updateLikeCount}
          deletePicture = {deletePicture}
        />
      </div>
    );
}

export default App;
