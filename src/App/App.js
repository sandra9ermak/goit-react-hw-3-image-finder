import "./App.css";
import React from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import { getApi } from "../service/api";

class App extends React.Component {
  state = {
    images: [],
    error: false,
    isLoading: false,
    searchForm: "",
    inputQuery: "",
    // page: 0,
    page: 0,
    isModalOpen: false,
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
      .then((hits) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
        }))
      )
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
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
    // this.setState({ isModalOpen: true });
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div className="container">
        <Searchbar
          onSubmit={this.submitSearchForm}
          onChange={this.handleChange}
        ></Searchbar>
        {/* {this.state.images.length === 0 && <h1>ERRROR</h1>} */}
        {this.state.isLoading && <Loader></Loader>}
        {this.state.images.length !== 0 && (
          <ImageGallery
            images={this.state.images}
            onOpen={this.openModal}
            isModalOpen={this.state.isModalOpen}
          ></ImageGallery>
        )}
        {this.state.images.length !== 0 && (
          <Button
            onClick={this.handleButtonLoad}
            onScroll={this.windowScroll}
          ></Button>
        )}
      </div>
    );
  }
}

export default App;
