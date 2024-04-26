import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "./HomeViews/BooksTable";
import BooksCard from "./HomeViews/BooksCard";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        console.log(response.data.Books);
        setBooks(response.data.Books);
        setLoading(false);
      })
      .catch((e) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="p-4 ">
        <div className="flex justify-center items-center gap-x-4">
          <button
            onClick={() => setShowType("table")}
            className="bg-sky-300 hover:bg-sky-600 w-[72px] h-[40px] border border-black rounded-lg "
          >
            Table
          </button>
          <button
            onClick={() => setShowType("card")}
            className="bg-sky-300 hover:bg-sky-600 w-[72px] h-[40px] border border-black rounded-lg  "
          >
            Card
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </>
  );
};

export default Home;
