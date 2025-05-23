import React, { useState } from "react";
import axios from "../api/axios";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/auth/logout");
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("user");
      setAuthUser(null);
    } catch (error) {
      console.log(error);
      toast.error("Server Internal Error");
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
