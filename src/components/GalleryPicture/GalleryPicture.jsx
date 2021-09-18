import {useState} from 'react';

function GalleryPicture(props) {
    const [description, setDescription] = useState(false);

    return (
        <>
        <div className = "picture-box">
          
          {!description && <p>false</p>}
          {description ? 
            <><p>{props.picture.description}</p><br /></>
            
            : <><img src={props.picture.path}/><br /></>}
           <button className="like-button">Love it!</button>
          <button onClick={() =>togglePicture(props.picture.id)}>toggle</button>
           <br />
          </div>
          </>
     );
}

export default GalleryPicture;

