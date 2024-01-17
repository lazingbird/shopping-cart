import PropTypes from "prop-types";
import React from "react";

import ListElement from "./ListElement";

const List = ({ items, focus }) => {
  if (items.length === 2) {
    return (
      <ul className="display: flex gap-4">
        {items.map((item) => (
          <ListElement key={item.name} item={item} />
        ))}
      </ul>
    );
  }
  return (
    <ul className="display: flex border-2 border-solid border-slate-200 first:bg-black">
      {items.map((item) => (
        <ListElement focus={focus} key={item.name} item={item} />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
