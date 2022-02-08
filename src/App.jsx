import React from "react";
import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SimpleReactLightbox from 'simple-react-lightbox'

class App extends Component {
  state = {
    query: "",
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };
  render() {
    const { query } = this.state;
    return (
      <SimpleReactLightbox>
        <Searchbar handleFormSubmit={this.handleFormSubmit} />
        <ImageGallery query={query} />
        {/*
        <Modal></Modal> */}
      </SimpleReactLightbox>
    );
  }
}

export default App;
