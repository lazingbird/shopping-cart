import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListElement = ({ item, focus, textColor }) => {
  const url = item.name === "Home" ? "/" : `/${item.name}`;

  return (
    <Link
      id={item.name}
      className={` flex items-center  transition duration-500 ease-out  has-[:focus]:bg-black has-[:hover]:opacity-50`}
      style={{
        backgroundColor: item.name === focus ? item.color : "",
        color: item.name === focus ? "#e2e8f0" : "#020617",
      }}
      to={url}
    >
      <li
        className={` flex h-10 flex-row items-center justify-center gap-1 pl-3 pr-3 ${textColor} `}
      >
        <FontAwesomeIcon className="h-4 w-4" icon={item.icon} />
        {item.name === "Conta" || item.name === "Carrinho" ? "" : item.name}
      </li>
    </Link>
  );
};

ListElement.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListElement;
