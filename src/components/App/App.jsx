import Axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import '../GalleryList/GalleryList';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  //variables to set db properties
  const [newPicturePath, setNewPicturePath] = useState('');
  const [newPictureDecription, setNewPictureDescription] = useState('');
  //list retrieved from db
  const [galleryList, setGalleryList] = useState([]);

  //run getGallery() on load one time
  useEffect(() => {
    getGallery();
  }, []);

  //axios GET function
  const getGallery = () => {
    Axios.get('/gallery') //get the gallery route
      .then( (response) => { //log and set response
        console.table(response.data);
        setGalleryList(response.data); //set the list to current db table
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
  event.preventDefault(); //stop page refresh
  console.log('in addAnImage');
  Axios({
    method: 'POST',
    url: '/gallery', 
    data: { //send added properties
      path: newPicturePath,
      description: newPictureDecription
    }
  })
  .then( (response) => { //then log response
    console.log(response);
    getGallery();
  })
  .catch(function (error) { //catch error
    console.log(error);
  });
}

//axios DELETE function to delete a single image
const deletePicture = (deleteID) => {
  console.log('in deletePicture', deleteID);
  Axios({
    method: 'DELETE',
    url: `/gallery/${deleteID}`
  })
  .then( (response) => { //log response
    console.log(response);
    getGallery(); //refresh DOM
  })
  .catch(function (error) { //catch an error
    console.log('Error on DELETE request.', error);
  });
};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Gallery</h1>
        </header>
        {/* add input form */}
        <GalleryForm 
          addAnImage = {addAnImage}
          setNewPicturePath = {setNewPicturePath}
          setNewPictureDescription = {setNewPictureDescription}
        />
        {/* display images */}
        <GalleryList 
          galleryList = {galleryList} //list variable
          updateLikeCount = {updateLikeCount} //put function
          deletePicture = {deletePicture} //delete function
        />
      </div>
    );
}

export default App;
