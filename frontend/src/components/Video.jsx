import React from "react";

const Video = () => {
  return (
    <div className="rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 size-[90%] max-w-[1280px] mx-auto my-10 bg-[rgba(0,0,0,.5)] p-5 flex flex-col lg:flex-row">
      <div className="m-auto w-full p-5">
        <iframe
          className="w-full h-[350px]"
          src="https://www.youtube.com/embed/9UIx8hptdv8?si=7olsYRULXu9FKIPm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="m-auto w-full p-5 ">
        <iframe
          className="w-full h-[350px]"
          src="https://www.youtube.com/embed/2r79SGpY5tU?si=_cg3MCl_OCNpuj0Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="m-auto w-full p-5 ">
        <iframe
          className="w-full h-[350px]"
          src="https://www.youtube.com/embed/2GW2PVwUXN4?si=BAxUeq5ie63_wLQZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
