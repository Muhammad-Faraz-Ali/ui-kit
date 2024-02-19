import React from "react";

const getVariantStyles = (variant) => {
  switch (variant) {
    case "h1":
      return { fontSize: "2em", fontWeight: "bold" };
    case "h2":
      return { fontSize: "1.5em", fontWeight: "bold" };
    case "h3":
      return { fontSize: "1.17em", fontWeight: "bold" };
    case "h4":
      return { fontSize: "1em", fontWeight: "bold" };
    case "h5":
      return { fontSize: "0.83em", fontWeight: "bold" };
    case "h6":
      return { fontSize: "0.67em", fontWeight: "bold" };
    case "body1":
      return { fontSize: "1em" };
    case "body2":
      return { fontSize: "0.8em" };
    case "caption":
      return { fontSize: "0.75em" };
    case "subtitle1":
      return { fontSize: "1.2em" };
    case "subtitle2":
      return { fontSize: "1em" };
    default:
      return { fontSize: "1em" };
  }
};

const Typography = ({ variant, color, uppercase, children }) => {
  const styles = {
    ...getVariantStyles(variant),
    color: color || "black",
    textTransform: uppercase ? "uppercase" : "none",
  };

  return <p style={styles}>{children}</p>;
};

export default Typography;
