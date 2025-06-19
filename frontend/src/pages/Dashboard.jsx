import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useGetKoncerts from "../hooks/useGetKoncerts";
import {
  FaTrash,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPlus,
} from "react-icons/fa";
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
    // Vyčistit formulář po úspěšném přidání
    setInputs({
      denVTydnu: "",
      den: "",
      mesic: "",
      rok: "",
      mesto: "",
      text: "",
    });
  };

  const logoutHandler = () => {
    logout();
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Opravdu chcete smazat tento koncert?")) {
      await deleteKoncert(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d24] to-[#242831] p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-200 mb-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent" style={{fontFamily: 'Poppins, sans-serif'}}>
            KONCERTY
          </h1>
          <p className="text-gray-400 text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>Správa koncertů a událostí</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Seznam koncertů */}
          <div className="bg-black/65 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 shadow-2xl" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
            <div className="flex items-center mb-6">
              <FaCalendarAlt className="text-red-400 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-200" style={{fontFamily: 'Poppins, sans-serif'}}>
                Nadcházející koncerty
              </h2>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400"></div>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {koncerts && koncerts.length > 0 ? (
                  koncerts.map((koncert) => (
                    <div
                      key={koncert._id}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium mr-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                              {koncert.denVTydnu}
                            </span>
                            <span className="text-gray-200 font-semibold text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
                              {koncert.datumString}
                            </span>
                          </div>

                          <div className="flex items-center text-gray-300 mb-2">
                            <FaMapMarkerAlt className="text-red-400 mr-2" />
                            <span className="font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>{koncert.mesto}</span>
                          </div>

                          {koncert.text && (
                            <div className="flex items-center text-gray-300">
                              <FaClock className="text-red-400 mr-2" />
                              <span style={{fontFamily: 'Poppins, sans-serif'}}>{koncert.text}</span>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => deleteHandler(koncert._id)}
                          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <FaCalendarAlt className="text-gray-500 text-4xl mx-auto mb-4" />
                    <p className="text-gray-400" style={{fontFamily: 'Poppins, sans-serif'}}>Zatím žádné koncerty</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Formulář pro nový koncert */}
          <div className="bg-black/65 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 shadow-2xl" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
            <div className="flex items-center mb-6">
              <FaPlus className="text-green-400 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-200" style={{fontFamily: 'Poppins, sans-serif'}}>Nový koncert</h2>
            </div>

            <form onSubmit={submitHandler} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Den v týdnu
                  </label>
                  <input
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    type="text"
                    placeholder="So"
                    value={inputs.denVTydnu}
                    onChange={(e) =>
                      setInputs({ ...inputs, denVTydnu: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Den
                  </label>
                  <input
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="31"
                    value={inputs.den}
                    onChange={(e) =>
                      setInputs({ ...inputs, den: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Měsíc
                  </label>
                  <input
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    type="number"
                    placeholder="2"
                    min="1"
                    max="12"
                    value={inputs.mesic}
                    onChange={(e) =>
                      setInputs({ ...inputs, mesic: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Rok
                  </label>
                  <input
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    type="number"
                    placeholder="2025"
                    min="2025"
                    value={inputs.rok}
                    onChange={(e) =>
                      setInputs({ ...inputs, rok: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Město
                </label>
                <input
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                  type="text"
                  placeholder="Olomouc"
                  value={inputs.mesto}
                  onChange={(e) =>
                    setInputs({ ...inputs, mesto: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Dodatečné informace
                </label>
                <input
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                  type="text"
                  placeholder="Od 19:00"
                  value={inputs.text}
                  onChange={(e) =>
                    setInputs({ ...inputs, text: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent"
                style={{fontFamily: 'Poppins, sans-serif'}}
              >
                <FaPlus className="inline mr-2" />
                Přidat koncert
              </button>
            </form>
          </div>
        </div>

        {/* Logout tlačítko */}
        <div className="text-center mt-8">
          <Link
            onClick={logoutHandler}
            className="inline-flex items-center bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 font-semibold py-3 px-6 rounded-xl border border-red-500/30 transition-all duration-200 transform hover:scale-105"
          >
            ODHLÁSIT SE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
