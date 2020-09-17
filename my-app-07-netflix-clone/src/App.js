import React from "react";
import "./App.css";

import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

import requests from "./requests";

function App() {
  return (
    <div className="app">
      {/* <h1>Hey Let's build Netflix-Clone</h1> */}
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchToRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
