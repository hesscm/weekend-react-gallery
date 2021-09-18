import {useState} from 'react';

function GalleryList(props) {

    const [description, setDescription] = useState(false);
    
    // const togglePicture = () => {
    //     console.log('in togglePicture');
    //     setDescription(true);
    //   }
    
    return(
        <>
        <p>Gallery goes here</p>
        {props.galleryList.map (picture => (
          (<div className = "picture-box" key={picture.id}>
          
          {!description && <p>false</p>}
          {description ? 
            <><p>{picture.description}</p><br /></>
            
            : <><img src={picture.path}/><br /></>}
           <button className="like-button">Love it!</button>
          <button onClick={() =>togglePicture(picture.id)}>toggle</button>
           <br />
          </div>)
        ))}
        </>


    );
}

export default GalleryList;