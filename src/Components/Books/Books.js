// Classes.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getChapterByBookId } from "../../Actions/chapterActions";

function Books() {
  const { books } = useSelector((state) => state.book);

  const navigate = useNavigate();
  const dispatch = useDispatch;

  const handleClassClick = (bookId) => {
    // dispatch(getChapterByBookId(bookId));
    navigate(`/chapters?bookId=${bookId}`);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-4">Available Books</h1>
        <button
          className="bg-red-600 rounded-md text-white h-8 w-24"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="m-2 bg-gray-900 text-white text-center py-6 rounded-lg cursor-pointer"
            onClick={() => handleClassClick(book._id)}
          >
            {book.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
