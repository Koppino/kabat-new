import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./FotoGallery.css";
export default function VideoGallery() {
  const images = [
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/2.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/1.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/3.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/4.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/5.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/6.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/7.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/8.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/9.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/10.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/11.jpg",
    },
    {
      download_url: "http://kabat-tribute.cz/assets/galerie/12.jpg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/01.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/02.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/03.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/04.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/05.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/06.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/07.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/08.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/09.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/10.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/11.jpeg",
    },
    {
      download_url:
        "http://kabat-tribute.cz/assets/galerie/prilohy_82689/12.jpeg",
    },
  ];
  return (
    <>
      <Carousel
        className="crsl rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 size-[90%] max-w-[1280px] mx-auto my-10 bg-[rgba(0,0,0,.5)] p-5"
        autoPlay
        infiniteLoop
      >
        {images.map((image) => (
          <img src={image.download_url} alt={image.author} />
        ))}
      </Carousel>
    </>
  );
}
