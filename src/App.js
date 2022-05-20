import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { useApi } from "./hooks/useApi";
import { Favourites } from "./pages/Favourites";
import { Context, useList } from "./hooks/useList";

function App() {
  const { getMovies } = useApi();
  const { myList, setModal, count, setMyList, delMyList, modal } = useList();
  const value = {
    myList,
    setModal,
    count,
    setMyList,
    delMyList,
    modal,
    getMovies,
  };
  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
