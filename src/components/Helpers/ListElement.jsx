import PropTypes from "prop-types";
import React from "react";

const ListElement = ({ item }) => {
  return (
    <li>
      <a href="#">{item}</a>
    </li>
  );
};

ListElement.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ListElement;
