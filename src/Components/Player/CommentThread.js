// CommentThread.js
import React, { useState } from 'react';
import Comment from './Comment';

const initialComments = [
  { id: 1,email:"xyz@gmail.com", text: 'This is a comment', replies: [] },
  { id: 2,email:"xyz@gmail.com", text: 'Another comment here', replies: [] },
];

function CommentThread() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentObj = { id: Date.now(), text: newComment, replies: [] };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comment Section</h1>

      <form onSubmit={handleCommentSubmit} className="mb-4">
        <input
          type="text"
          className="border rounded-md w-full p-2 text-sm"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a new comment..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md"
        >
          Submit
        </button>
      </form>

      {/* Render comments */}
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentThread;
