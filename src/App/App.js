import "./App.css";
import React from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";

class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=23779410-abe809331958b49ace969e642&image_type=photo&orientation=horizontal&per_page=12"
      )
      .then((response) =>
        this.setState({ images: response.data.hits, isLoading: false })
      );
  }

  render() {
    return (
      <div>
        <Searchbar></Searchbar>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <ImageGallery images={this.state.images}></ImageGallery>
        )}
        <Button></Button>
        <Loader></Loader>
      </div>
    );
  }
}

export default App;
