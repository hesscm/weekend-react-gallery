
import GalleryPicture from '../GalleryPicture/GalleryPicture'

function GalleryList(props) {
    
    // const togglePicture = () => {
    //     console.log('in togglePicture');
    //     setDescription(true);
    //   }
    
    return(
        <>
            <h2>Gallery</h2>
            {props.galleryList.map (picture => (
                <GalleryPicture 
                    key={picture.id}
                    picture={picture}
                    />
            ))}
        </>
    );
}

export default GalleryList;