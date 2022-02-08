import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ small, big, onClickImg }) {
  return (
    <div  className={s.imageGalleryItem}>
      <img src={small} alt="" className={s.imageGalleryItemImage}/>
   </div>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.protoTypes = {
  small: PropTypes.string,
  big: PropTypes.string,
};
