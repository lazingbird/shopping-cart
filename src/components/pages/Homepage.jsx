import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../navbar/Navbar";
import game from "../../assets/reddead.jpg";
const Homepage = () => {
  return (
    <>
      <header>
        <Navbar focus={"Home"}></Navbar>
        <section className="display: flex items-center justify-center pt-28">
          <FontAwesomeIcon
            className="size-12"
            icon={faChevronLeft}
          ></FontAwesomeIcon>
          <div className="display: flex shadow-xl ">
            <img className="" src={game}></img>
            <div className="w-72 bg-slate-100 text-center">
              <h2 className="pt-12 text-xl font-bold ">
                Red Dead Redemption 2
              </h2>
            </div>
          </div>
          <FontAwesomeIcon
            className="size-12"
            icon={faChevronRight}
          ></FontAwesomeIcon>
        </section>
      </header>
    </>
  );
};

export default Homepage;
