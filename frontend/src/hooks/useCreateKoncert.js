import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../api/axios";
import { useAuthContext } from "../context/AuthContext";

const useCreateKoncert = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();
  const createKoncert = async (inputs) => {
    try {
      setLoading(true);
      const res = await axios.post("/koncert", inputs, {
        headers: { Authorization: authUser.token },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Server Internal Error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, createKoncert };
};

export default useCreateKoncert;
