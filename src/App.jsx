import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Footer from "./components/Footer/Footer";

function App() {
  //const [searchData, useSearchData] = useState();
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((preData) => {
        return { ...preData, [key]: data };
      });
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <div>
      <Navbar />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      <Footer />
    </div>
  );
}
export default App;
