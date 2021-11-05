const Modal = ({src, alt, key}) => {
    return (
        <div className="Overlay">
            <div className="Modal">
                    <img src={src} alt={alt} />
            </div>
         </div>
    )
}

export default Modal;