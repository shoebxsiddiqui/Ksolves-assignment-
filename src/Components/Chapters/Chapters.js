// Classes.js
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Chapters() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("bookid");
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-4">Chapters for Book {query}</h1>
        <button
          className="bg-red-600 rounded-md text-white h-8 w-24"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
      <div className="space-y-4">
        <Link className="m-2" to={`/lectures?chapterid=${1}`}>
          <div className="bg-gray-900 text-white text-center py-6 rounded-lg cursor-pointer">
            Chapter 1{" "}
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Chapters;
