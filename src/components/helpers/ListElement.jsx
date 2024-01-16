import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const ListElement = ({ item }) => {
  const fragment = `#${item.name}`;
  const color = item.color;
  return (
    <a
      id={item.name}
      className={`target:bg-slate-200 target:text-purple-900 has-[:focus]:bg-black has-[:hover]:opacity-50`}
      href={fragment}
    >
      <li className="display: box-border  flex h-14 flex-row items-center justify-center gap-1.5 pl-3 pr-3 ">
        <FontAwesomeIcon className="h-6 w-6" icon={item.icon} />
        {item.name === "Conta" || item.name === "Carrinho" ? "" : item.name}
      </li>
    </a>
  );
};

ListElement.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListElement;
