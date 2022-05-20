import { useState, useContext } from "react";

import { Context } from "../hooks/useList";

export function Modal() {
  const [imgState, setImgState] = useState(false);
  const { myList, setMyList, delMyList, modal, setModal } = useContext(Context);

  return (
    <>
      <img
        src={modal.details.show.image.original}
        alt=""
        width="10%"
        className="fixed left-2/3 r top-1/3 z-30 "
        onClick={(e) => {
          if (imgState) {
            e.target.style.transform = "scale(1)";
            setImgState(false);
          } else {
            e.target.style.transform = "scale(4)";
            setImgState(true);
          }
        }}
      />
      <div
        className="fixed top-0 left-0 w-full h-full bg-sky-600/20 z-10"
        onClick={(e) => {
          setModal({ state: false, details: {} });
          setImgState(false);
        }}
      ></div>
      <div className="modal z-20 overflow-auto w-2/3 h-1/2 text-gray-100  rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className=" p-5">Title: {modal.details.show.name}</div>
        <div className=" p-5">Language: {modal.details.show.language}</div>
        <div className=" p-5">
          Genre: {modal.details.show.genres.map((item) => item + ",")}
        </div>
        <div className=" p-5">Type: {modal.details.show.type}</div>
        <div className=" p-5"> Summary: </div>
        <div
          className="w-1/2 p-5"
          dangerouslySetInnerHTML={{
            __html: modal.details.show.summary,
          }}
        />

        <button
          type="button"
          className="fixed left-2/4 top-10 bg-blue-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={(e) => {
            if (
              myList.filter((item) => item.show.id === modal.details.show.id)
                .length > 0
            ) {
              delMyList(modal.details.show.id);
            } else {
              setMyList(modal.details);
            }
          }}
        >
          {myList.filter((item) => item.show.id === modal.details.show.id)
            .length > 0
            ? "Remove from favourites"
            : "Add to Favourites"}
        </button>
        <button
          type="button"
          className="fixed right-0 top-0 bg-blue-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={(e) => {
            setModal({ state: false, details: {} });
            setImgState(false);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
