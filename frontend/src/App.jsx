import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="w-full" id="uvod">
        <Navbar />
        <div className="">
          <img
            alt="bg"
            src="header_img-72b6ce16.jpg"
            className="bg-cover bg-center  w-full"
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          ></Route>
          <Route
            path="/dashboard"
            element={authUser ? <Dashboard /> : <Navigate to={"/"} />}
          ></Route>
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
