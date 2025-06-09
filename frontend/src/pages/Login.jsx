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
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-800 bg-opacity-90 shadow-xl rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-5 my-12">
      <div className="h-full w-full ">
        <h1 className="text-3xl text-center text-white font-semibold mb-6">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-sm text-gray-300">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-sm text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out mt-6" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
