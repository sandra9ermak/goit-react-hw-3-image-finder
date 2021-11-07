import "./App.css";
import React from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import { getApi } from "../service/api";
import Notiflix from "notiflix";

class App extends React.Component {
  state = {
    images: [],
    error: false,
    isLoading: false,
    searchForm: "",
    inputQuery: "",
    page: 0,
    isModalOpen: false,
    modalImage: {},
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    getApi()
      .then((hits) =>
        this.setState({
          images: hits,
        })
      )
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchForm !== prevState.searchForm ||
      this.state.page !== prevState.page
    ) {
      this.renderImages();
    }
  }

  renderImages = () => {
    this.setState({ isLoading: true });
    getApi(this.state.searchForm, this.state.page)
      .then((hits) => {
        if (hits.length === 0) {
          return Notiflix.Notify.failure(
            `There is no results with ${this.state.searchForm.toUpperCase()} request`
          );
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
        }));
      })
      .catch((err) => this.setState({ error: err }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
        this.setState({ isLoading: false });
      });
  };

  handleChange = (e) => {
    this.setState({
      inputQuery: e.target.value,
    });
  };

  submitSearchForm = (e) => {
    e.preventDefault();
    this.setState({
      searchForm: this.state.inputQuery,
      page: 1,
      images: [],
    });
  };

  handleButtonLoad = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  openModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  showModalImg = ({ modalImage }) => {
    this.setState({ modalImage: modalImage });
    this.openModal();
  };

  render() {
    return (
      <div className="container">
        <Searchbar
          onSubmit={this.submitSearchForm}
          onChange={this.handleChange}
        ></Searchbar>
        {this.state.isLoading && <Loader></Loader>}
        {this.state.images.length !== 0 && (
          <ImageGallery
            images={this.state.images}
            isModalOpen={this.state.isModalOpen}
            showModalImg={this.showModalImg}
          ></ImageGallery>
        )}
        {this.state.images.length !== 0 && (
          <Button onClick={this.handleButtonLoad}></Button>
        )}
        {this.state.isModalOpen && (
          <Modal
            modalImage={this.state.modalImage}
            onClick={this.openModal}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
