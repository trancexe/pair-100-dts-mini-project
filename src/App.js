import React from "react";
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <>ini halaman home</>
=======
import MoviesPopular from "./components/MoviesPopular";
import MoviesNowPlaying from "./components/MoviesNowPlaying";
import MoviesTopRated from "./components/MoviesTopRated";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App" style={{ background: "#000000" }}>
      <NavBar />
      <Jumbotron />
      <div
        className="container-home"
        style={{ position: "relative", zIndex: 0 }}
      >
        <MoviesNowPlaying />
        <MoviesTopRated />
        <MoviesPopular />
      </div>
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
