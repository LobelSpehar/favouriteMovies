import { useContext } from "react";

import { Context } from "../hooks/useList";
import { List } from "../components/List";

export function Favourites() {
  const { myList } = useContext(Context);
  return (
    <div className="flex flex-wrap w-full ">
      <List list={myList} />
    </div>
  );
}
