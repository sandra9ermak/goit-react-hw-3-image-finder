import Modal from "../Modal/Modal";

const ImageGalleryItem = ({ webformatURL, alt, isModalOpen, onOpen, largeImageURL, ...key}) => {
    return (
        <li key={key} className="ImageGalleryItem" onClick={onOpen}>
            <img src={webformatURL} alt={alt} className="ImageGalleryItem-image" />
            {isModalOpen &&
                <Modal key={key} src={largeImageURL} alt={alt}></Modal>}
        </li>
    )
}

export default ImageGalleryItem;