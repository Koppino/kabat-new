import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../api/axios";
const useGetKoncerts = () => {
  const [loading, setLoading] = useState(false);
  const [koncerts, setKoncerts] = useState([]);

  useEffect(() => {
    const getKoncerts = async () => {
      try {
        const res = await axios.get("/koncert");
        setKoncerts(res.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
        toast.error("Server Internal Error");
      } finally {
        setLoading(false);
      }
    };
    getKoncerts();
  }, []);

  return { loading, koncerts };
};

export default useGetKoncerts;
