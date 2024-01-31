import PropTypes from "prop-types";
import React from "react";

import ListElement from "./ListElement";

const List = ({ items, focus }) => {
  if (items.length === 2) {
    return (
      <ul className="flex">
        {items.map((item) => (
          <ListElement textColor={"text-white"} key={item.name} item={item} />
        ))}
      </ul>
    );
  }
  return (
    <ul className="grid grid-cols-2 border-solid border-slate-800  sm:flex ">
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
