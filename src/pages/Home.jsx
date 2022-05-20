import { useState, useEffect, useContext } from "react";

import { Context } from "../hooks/useList";
import { List } from "../components/List";

export function Home() {
  const { getMovies } = useContext(Context);
  const [text, setText] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    onGetMovies("Titanic");
  }, []);
  async function onGetMovies(search) {
    let res = await getMovies(search);
    setResponse(res);
  }
  return (
    <div className="w-full">
      <input
        type="text"
        value={text}
        className="shadow border rounded py-2 px-3 text-gray-700 w-1/3  left-1/2 fixed -translate-x-1/2 -translate-y-10 focus:outline-none focus:shadow-outline"
        placeholder="Search"
        onChange={(e) => {
          setText(e.target.value);
          setTimeout(() => {
            onGetMovies(e.target.value);
          }, 100);
        }}
      />
      <List list={response} />
    </div>
  );
}
