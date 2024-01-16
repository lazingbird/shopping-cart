import PropTypes from "prop-types";
import React from "react";

import ListElement from "./ListElement";

const List = ({ items }) => {
  return (
    <ul className="display: flex gap-4">
      {items.map((item) => (
        <ListElement key={item.name} item={item} />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
