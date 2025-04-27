import React from "react";
import useGetKoncerts from "../hooks/useGetKoncerts";

const Koncerty = () => {
  const { loading, koncerts } = useGetKoncerts();
  return (
    <div className="rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 size-[90%] max-w-[800px] mx-auto my-10 bg-[rgba(0,0,0,.5)] p-3">
      <h1 className="text-3xl text-red-700 font-bold text-center pt-3">
        KONCERTY
      </h1>
      <ul className="text-center p-4 text-md lg:text-xl text-gray-300">
        {!loading &&
          koncerts &&
          koncerts.map((koncert) => (
            <li key={koncert._id} className="p-3">
              <p>
                {koncert.denVTydnu} {koncert.datumString} -
                <b> {koncert.mesto}</b> - {koncert.text}
              </p>
            </li>
          ))}

        {loading && <span className="loading loading-spinner"></span>}
      </ul>
    </div>
  );
};

export default Koncerty;
