import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d24] to-[#242831] flex items-center justify-center px-4">
      <div className="bg-black/65 backdrop-blur-sm border border-gray-700/30 rounded-xl shadow-2xl w-full max-w-md p-8" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-200 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Vítejte zpět</h1>
          <p className="text-gray-400">Přihlaste se do svého účtu</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
              Uživatelské jméno
            </label>
            <input
              type="text"
              placeholder="Zadejte uživatelské jméno"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
              Heslo
            </label>
            <input
              type="password"
              placeholder="Zadejte heslo"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{fontFamily: 'Poppins, sans-serif'}}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Přihlašování...
              </div>
            ) : (
              "Přihlásit se"
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>
            Nemáte účet?{' '}
            <Link to="/register" className="text-red-400 hover:text-red-300 font-medium underline transition duration-200">
              Zaregistrujte se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
