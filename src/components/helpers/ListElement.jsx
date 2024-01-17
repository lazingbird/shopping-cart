import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListElement = ({ item, focus }) => {
  const url = item.name === "Home" ? "/" : `/${item.name}`;

  return (
    <Link
      id={item.name}
      className={`transition duration-500 ease-out target:bg-slate-200 target:text-purple-900 has-[:focus]:bg-black has-[:hover]:opacity-50`}
      style={{
        backgroundColor: item.name === focus ? "#e2e8f0" : "",
        transition: "all .20s ease",
        WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease"
        color: item.name === focus ? item.color : "",
      }}
      to={url}
    >
      <li className="display: box-border  flex h-14 flex-row items-center justify-center gap-1.5 pl-3 pr-3 ">
        <FontAwesomeIcon className="h-6 w-6" icon={item.icon} />
        {item.name === "Conta" || item.name === "Carrinho" ? "" : item.name}
      </li>
    </Link>
  );
};

ListElement.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListElement;
