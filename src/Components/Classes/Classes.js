import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getBooksByClassId } from "../../Actions/bookActions";

function Classes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classes } = useSelector((state) => state.class);

  const handleClassClick = (classId) => {
    dispatch(getBooksByClassId(classId));
    navigate(`/books?classid=${classId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Classes</h1>
      <div className="space-y-4">
        {classes.map((_class) => (
          <div
            key={_class._id}
            className="m-2 bg-gray-900 text-white text-center py-6 rounded-lg cursor-pointer"
            onClick={() => handleClassClick(_class._id)}
          >
            {_class.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
