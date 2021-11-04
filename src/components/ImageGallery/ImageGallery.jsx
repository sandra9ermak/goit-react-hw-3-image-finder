import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({images, onOpen, isModalOpen}) => {
    return (
        <ul className="ImageGallery">
        {images.map(item => 
            <ImageGalleryItem src={item.webformatURL} alt={item.tags} key={item.id} onOpen={onOpen} isModalOpen={isModalOpen}></ImageGalleryItem>
            )}
        </ul>
    )
}

export default ImageGallery;