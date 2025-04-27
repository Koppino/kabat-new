import React from "react";
import toast from "react-hot-toast";
import axios from "../api/axios";
import { useAuthContext } from "../context/AuthContext";
const useDeleteKoncert = () => {
  const { authUser } = useAuthContext();
  const deleteKoncert = async (id) => {
    try {
      const res = await axios.get("/koncert/delete/" + id, {
        headers: { Authorization: authUser.token },
      });
      window.location.reload();
      toast.success("Koncert deleted");
    } catch (error) {
      console.log(error);
      toast.error("Server Internal Error");
    }
  };

  return { deleteKoncert };
};

export default useDeleteKoncert;
