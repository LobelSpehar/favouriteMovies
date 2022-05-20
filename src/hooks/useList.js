import React from "react";
import { useEffect, useState } from "react";

export function useList() {
  const [myList, setList] = useState([]);
  const [modal, setModal] = useState({ state: false, details: {} });
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(myList.length);
  }, [myList]);

  function setMyList(item) {
    setList((arr) => [...arr, item]);
  }
  function delMyList(id) {
    let array = myList.filter((item) => item.show.id !== id);
    setList(array);
  }
  return { myList, setMyList, delMyList, modal, setModal, count };
}
export const Context = React.createContext({});
