import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="w-full" id="uvod">
        <Navbar />
        <div className="relative flex items-center justify-center">
          <img
            alt="bg"
            src="header_img-72b6ce16.jpg"
            className="bg-cover bg-center  w-full"
          />
          <div className="absolute bottom-[25%]">
            <a href="https://www.facebook.com/KabatTribute/" target="_blank">
              <button className="fb-btn">
                <FaFacebookF className="icon inline" /> FACEBOOK
              </button>
            </a>
            <a href="https://www.youtube.com/@KabatTribute" target="_blank">
              <button className="yt-btn">
                <FaYoutube className="icon inline" /> YOUTUBE
              </button>
            </a>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          ></Route>
          <Route
            path="/dashboard"
            element={authUser ? <Dashboard /> : <Navigate to={"/login"} />}
          ></Route>
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
