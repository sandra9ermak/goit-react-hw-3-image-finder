const ImageGalleryItem = ({src, alt, id}) => {
    return (
        <li className="ImageGalleryItem" key={id}>
            <img src={src} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

export default ImageGalleryItem;