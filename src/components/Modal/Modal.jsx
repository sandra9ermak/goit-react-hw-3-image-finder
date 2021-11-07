import React from "react";

class Modal extends React.Component {
     componentDidMount() {
    window.addEventListener('keydown', this.modalEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalEscape);
  }

  modalEscape = e => {
    if (e.keyCode === 27) {
      this.props.onClick();
    }
  };

  clickBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClick();
    }
  };

    render() {
        return (
        <div className="Overlay" onClick={this.clickBackdrop}>
            <div className="Modal">
                    <img src={this.props.modalImage.largeImageURL} alt={this.props.modalImage.tags} />
            </div>
         </div>
    )
    }
}

export default Modal;