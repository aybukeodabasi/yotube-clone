import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import SearchResults from "./pages/SearchResults";
import VideoDetail from "./pages/VideoDetail";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Feed></Feed>}></Route>
        <Route path="/watch/:id" element={<VideoDetail></VideoDetail>}></Route>
        <Route
          path="/results"
          element={<SearchResults></SearchResults>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
