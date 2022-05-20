import { useContext } from "react";

import { Context } from "../hooks/useList";
import { Modal } from "../components/Modal";

export function List(props) {
  const { setModal, modal } = useContext(Context);
  return (
    <div className="list-none flex flex-wrap w-3/5 mx-auto my-10">
      {props.list
        .filter((item) => item.show.image)
        .map((item, index) => (
          <button
            key={index}
            type="button"
            className="hover:bg-sky-700 w-1/5 text-left"
            onClick={(e) => {
              setModal({ state: true, details: item });
            }}
          >
            {item.show.name}
            <img src={item.show.image.original} alt="" width="100%" />
          </button>
        ))}

      {modal.state ? <Modal /> : null}
    </div>
  );
}
