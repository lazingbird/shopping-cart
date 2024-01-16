import PropTypes from "prop-types";
import React from "react";

import ListElement from "./ListElement";

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListElement item={item} />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
