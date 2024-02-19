import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, style, isDisabled }) => {
  return (
    <button style={style} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

Button.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  text: "Submit",
};
