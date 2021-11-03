import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({images}) => {
    return (
        <ul className="ImageGallery">
        {images.map(item => 
            <ImageGalleryItem src={item.webformatURL} alt={item.tags} id={item.id}></ImageGalleryItem>
        )}
        </ul>
    )
}

export default ImageGallery;