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
    page: 1,
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

    // if (this.state.images.length === 0) {
    //   alert("Err");
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchForm !== prevState.searchForm) {
      this.setState({ isLoading: true });
      getApi(this.state.searchForm)
        .then((hits) =>
          this.setState({
            images: hits,
          })
        )
        .catch((err) => this.setState({ error: err }))
        .finally(() => this.setState({ isLoading: false }));
    }
    if (this.state.page !== prevState.page) {
      this.setState({ isLoading: true });
      getApi(this.state.searchForm, this.state.page)
        .then((hits) =>
          this.setState((prevState) => ({
            images: [...prevState.images, ...hits],
          }))
        )
        .catch((err) => this.setState({ error: err }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleChange = (e) => {
    this.setState({
      inputQuery: e.target.value,
    });
  };

  submitSearchForm = (e) => {
    e.preventDefault();
    this.setState({
      searchForm: this.state.inputQuery,
    });
  };

  handleButtonLoad = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    return (
      <div>
        <Searchbar
          onSubmit={this.submitSearchForm}
          onChange={this.handleChange}
          onClick={this.handleButtonLoad}
        ></Searchbar>
        {this.state.isLoading && <Loader></Loader>}
        {this.state.images.length && (
          <ImageGallery
            images={this.state.images}
            onOpen={this.openModal}
            isModalOpen={this.state.isModalOpen}
          ></ImageGallery>
        )}
        <Button onClick={this.handleButtonLoad}></Button>
      </div>
    );
  }
}

export default App;
