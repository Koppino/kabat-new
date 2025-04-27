import React from "react";
import Koncerty from "../components/Koncerty";
import Uvod from "../components/Uvod";
import Video from "../components/Video";
import FotoGallery from "../components/FotoGallery";
import Biografie from "../components/Biografie";
import Kontakty from "../components/Kontakty";
const Home = () => {
  return (
    <>
      <div>
        <Uvod />
      </div>
      <div className="bg"></div>
      <div id="koncerty" className="pt-10">
        <Koncerty />
      </div>
      <div id="video" className="pt-10">
        <Video />
      </div>
      <div id="foto" className="pt-10">
        <FotoGallery />
      </div>
      <div id="biografie" className="pt-20">
        <Biografie />
      </div>
      <div id="kontakty" className="pt-10">
        <Kontakty />
      </div>
    </>
  );
};

export default Home;
