// Lectures.js
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Lectures() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("chapterid");
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-4">Lectures for Chapter {query}</h1>
        <button className="bg-red-600 rounded-md text-white h-8 w-24" onClick={handleBack}>
          Back
        </button>
      </div>
      <div className="space-y-4">
        <Link className="m-2" to={`/vedio?vediourl=${"https://www.youtube.com/embed/9LJV1e3F3Bw?si=AHH2d_lcupPhjKnV"}`}>
        <div className="bg-gray-100 text-gray-800 text-center py-4 rounded-lg shadow-md cursor-pointer">
          Lecture 1: Overview
        </div>
        </Link>
        <Link className="m-2" to={`/vedio?vediourl=${"https://www.youtube.com/embed/9LJV1e3F3Bw?si=AHH2d_lcupPhjKnV"}`}>
        <div className="bg-gray-100 text-gray-800 text-center py-4 rounded-lg shadow-md cursor-pointer">
        Lecture 2: Key Concepts
        </div>
        </Link>
        <Link className="m-2" to={`/vedio?vediourl=${"https://www.youtube.com/embed/9LJV1e3F3Bw?si=AHH2d_lcupPhjKnV"}`}>
        <div className="bg-gray-100 text-gray-800 text-center py-4 rounded-lg shadow-md cursor-pointer">
        Lecture 3: Examples and Applications
        </div>
        </Link>

      </div>
    </div>
  );
}

export default Lectures;
