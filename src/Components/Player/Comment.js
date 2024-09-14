// Comment.js
import React, { useState } from 'react';

function Comment({ comment }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState(comment.replies || []);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    const newReply = { id: Date.now(), text: reply, replies: [] };
    setReplies([...replies, newReply]);
    setReply('');
    setShowReplyBox(false);
  };

  return (
    <div className="mb-4 ml-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className='text-sm'>{comment.email}</p>
        <p>{comment.text}</p>
        <div className="flex space-x-4 text-sm text-gray-500 mt-2">
          <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
        </div>

        {showReplyBox && (
          <form className="mt-2" onSubmit={handleReplySubmit}>
            <input
              type="text"
              className="border rounded-md w-full p-2 text-sm"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Write a reply..."
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        )}

        {/* Render replies */}
        {replies.length > 0 && (
          <div className="mt-4 ml-4">
            {replies.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
