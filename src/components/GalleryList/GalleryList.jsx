
import GalleryPicture from '../GalleryPicture/GalleryPicture'

function GalleryList(props) {
    return(
        <>
            <h2>Gallery</h2>
            {props.galleryList.map (picture => (
                <GalleryPicture 
                    key={picture.id}
                    picture={picture}
                    updateLikeCount={props.updateLikeCount}
                    />
            ))}
        </>
    );
}

export default GalleryList;