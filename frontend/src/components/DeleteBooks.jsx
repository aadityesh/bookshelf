import React, { useState } from "react";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error has occured. Please check logs.");
        enqueueSnackbar("Delete failed", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      {loading ? <Spinner /> : ""}
      <div
        className="flex flex-col items-center border-2
      border-sky-400 rounded-xl w-[600px] p-8 mx-auto"
      >
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          onClick={handleDeleteBook}
          className="p-4 bg-red-600 font-semibold text-white m-8 w-[100px] rounded-md"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
