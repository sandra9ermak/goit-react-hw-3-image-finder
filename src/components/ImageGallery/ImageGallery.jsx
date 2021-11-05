import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({images, onOpen, isModalOpen}) => {
    return (
        <ul className="ImageGallery">
        {images.map(item => 
            <ImageGalleryItem webformatURL={item.webformatURL} alt={item.tags} key={item.id} onOpen={onOpen} isModalOpen={isModalOpen} largeImageURL={item.largeImageURL}></ImageGalleryItem>
            // <ImageGalleryItem webformatURL={item.urlToImage} alt={item.tags} key={item.id} onOpen={onOpen} isModalOpen={isModalOpen} modalImage={item.urlToImage}></ImageGalleryItem>
            )
            }
        </ul>
    )
}

export default ImageGallery;