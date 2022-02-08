import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({ handleClickLoadMore }) {
  // handleLoadMoreClick = () => {
  //   // this.setState((prevState) => ({
  //   //   page: prevState.page + 1,
  //   // }));
  //   // setTimeout(() => console.log(this.state.page), 0);
  //   handleClickLoadMore();
  // };

  return (
    <button onClick={handleClickLoadMore} type="button" className={s.button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
