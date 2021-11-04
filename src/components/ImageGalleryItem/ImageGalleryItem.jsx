import Modal from "../Modal/Modal";

const ImageGalleryItem = ({ src, alt, isModalOpen, onOpen, ...key}) => {
    return (
        <li key={key} className="ImageGalleryItem">
            <img src={src} alt={alt} className="ImageGalleryItem-image" />
            {isModalOpen &&
                <Modal src={src} alt={alt} onClick={onOpen}></Modal>}
        </li>
    )
}

export default ImageGalleryItem;