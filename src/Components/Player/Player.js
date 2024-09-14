import React from 'react'
import CommentThread from './CommentThread'
import { useNavigate } from 'react-router-dom';

const Player = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
      };
  return (
    <div>
        <div className="flex flex-row justify-between mt-2">
        <h1 className="text-3xl font-bold mb-4">Content Player</h1>
        <button className="bg-red-600 rounded-md text-white h-8 w-24" onClick={handleBack}>
          Back
        </button>
      </div>
        <iframe
                className="mx-auto min-w-full h-96"
                src="https://www.youtube.com/embed/9LJV1e3F3Bw?si=AHH2d_lcupPhjKnV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <CommentThread/>
    </div>
  )
}

export default Player