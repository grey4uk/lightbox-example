import PropTypes from "prop-types";
import { SRLWrapper } from "simple-react-lightbox";
import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Fetch from "./FetchApi";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: "idle",
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query !== this.props.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: "pending" });
      if (prevProps.query !== this.props.query&&this.state.page!==1) {
        this.setState({ page: 1 });
        return
      }
      Fetch.fetchApi(
        this.props.query,
        this.state.page
      )
        .then((data) => {
          if (!data.hits.length) {
            this.setState({ status: "rejected" });
            return;
          }

          const images = data.hits;
          this.setState({
            images:
              this.state.page === 1
                ? images
                : [...this.state.images, ...images],
            status: "resolved",
          });
          console.log(`${this.state.page}>>>>>>>>`,this.state.images);
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  handleClickLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, error, status} = this.state;
    const {onClickImg}=this;
      return (
        <>
        {status === "idle"&&<div>Enter your query</div>}
        {status === "pending"&&<Loader />}
        {status === "rejected"&&<h1>Change your query</h1>}
        <SRLWrapper>
        <div className={s.imageGallery}>
        {images.map((image) => (
              <ImageGalleryItem
                key={image.webformatURL}
                small={image.webformatURL}
                big={image.largeImageURL}
                onClickImg={onClickImg}
              />
            ))}
        </div>
        </SRLWrapper>
          <Button handleClickLoadMore={this.handleClickLoadMore} />
        </>
      );
    }
  }

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.object,
};
