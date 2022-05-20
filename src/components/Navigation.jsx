import { Link } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../hooks/useList";

export function Navigation() {
  const { count } = useContext(Context);
  return (
    <nav className="flex justify-center ">
      <Link
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        to="/"
      >
        Search movies
      </Link>{" "}
      <Link
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-1"
        to="/favourites"
      >
        Favourites{"     "}
        <span className="text-center p-1 mr-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
          {count}
        </span>
      </Link>
    </nav>
  );
}
