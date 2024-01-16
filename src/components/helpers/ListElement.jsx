import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import React from "react";

const ListElement = ({ item }) => {
  return (
    <li className="display: flex flex-row items-center justify-center gap-1.5">
      <FontAwesomeIcon className="h-6 w-6" icon={item.icon} />
      <a className="" href="#">
        {item.name === "Conta" || item.name === "Carrinho" ? "" : item.name}
      </a>
      <FontAwesomeIcon
        className="origin-bottom object-bottom"
        icon={faChevronDown}
      />
    </li>
  );
};

export default ListElement;
