import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useGetKoncerts from "../hooks/useGetKoncerts";
import { FaTrash } from "react-icons/fa";
import useCreateKoncert from "../hooks/useCreateKoncert";
import useDeleteKoncert from "../hooks/useDeleteKoncert";
const Dashboard = () => {
  const { logout } = useLogout();
  const { loading, koncerts } = useGetKoncerts();
  const { createKoncert } = useCreateKoncert();
  const { deleteKoncert } = useDeleteKoncert();
  const [inputs, setInputs] = useState({
    denVTydnu: "",
    den: "",
    mesic: "",
    rok: "",
    mesto: "",
    text: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await createKoncert(inputs);
  };
  const logoutHandler = () => {
    logout();
  };
  const deleteHandler = async (id) => {
    await deleteKoncert(id);
  };
  return (
    <>
      <div className="rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 size-[90%] max-w-[1280px] mx-auto my-10 bg-[rgba(0,0,0,.5)] p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl p-2">KONCERTY</h1>
          <ul>
            {!loading &&
              koncerts &&
              koncerts.map((koncert) => (
                <li key={koncert._id}>
                  <p>
                    {koncert.denVTydnu} {koncert.datumString} - {koncert.mesto}-
                    {koncert.text}
                    <FaTrash
                      key={koncert._id}
                      className="inline-block ml-4 text-red-600 cursor-pointer"
                      onClick={() => deleteHandler(koncert._id)}
                    />
                  </p>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center py-6">
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={submitHandler}
          >
            <h1 className="text-3xl uppercase">Novy koncert</h1>
            <div className="flex flex-col">
              <label className="label">Den v tydnu</label>
              <input
                className="input"
                type="text"
                placeholder="napr: So"
                value={inputs.denVTydnu}
                onChange={(e) =>
                  setInputs({ ...inputs, denVTydnu: e.target.value })
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="label">Den</label>
              <input
                className="input"
                type="text"
                placeholder="napr: 1"
                value={inputs.den}
                onChange={(e) => setInputs({ ...inputs, den: e.target.value })}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="label">Mesic</label>
              <input
                className="input"
                type="text"
                placeholder="napr: 2"
                value={inputs.mesic}
                onChange={(e) =>
                  setInputs({ ...inputs, mesic: e.target.value })
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="label">Rok</label>
              <input
                className="input"
                type="text"
                placeholder="napr: 2025"
                value={inputs.rok}
                onChange={(e) => setInputs({ ...inputs, rok: e.target.value })}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="label">Mesto</label>
              <input
                className="input"
                type="text"
                placeholder="napr: Olomouc"
                value={inputs.mesto}
                onChange={(e) =>
                  setInputs({ ...inputs, mesto: e.target.value })
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="label">Text</label>
              <input
                className="input"
                type="text"
                placeholder="napr: Od 19hod"
                value={inputs.text}
                onChange={(e) => setInputs({ ...inputs, text: e.target.value })}
              ></input>
            </div>
            <div className="flex flex-col">
              <input
                type="submit"
                value="Pridat koncert"
                className="btn btn-primary mt-4"
              ></input>
            </div>
          </form>
        </div>
        <div>{inputs.denVTydnu}</div>
        <Link className="btn" onClick={logoutHandler}>
          ODHLASIT
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
