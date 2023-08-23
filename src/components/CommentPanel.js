import { useRef, useState } from "react";
import Card from "./Card";

function CommentPanel(props) {
  const commentInputRef = useRef();
  const imageInputRef = useRef();
  const [isFriends, setIsFriends] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault(); // prevents the default browser behavior of submitting the form

    const enteredComment = commentInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredIsFriends = isFriends;

    const commentData = {
      comment: enteredComment,
      image: enteredImage,
      isFriends: enteredIsFriends,
    };

    props.onAddComment(commentData);
  }

  return (
    <Card>
      <form className="form" onSubmit={submitFormHandler}>
        <div className="mb-6">
          <label htmlFor="comment" className="block mb-2 text-sm font-medium">
            Comments
          </label>
          <input
            type="text"
            id="comment"
            required
            ref={commentInputRef}
            className="block w-full p-4 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-300 focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-2 text-sm font-medium">
            Image
          </label>
          <input
            type="url"
            id="image"
            required
            ref={imageInputRef}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-300 peer-focus:border-blue-300"
          />
        </div>
        <div className="mt-4">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => setIsFriends(!isFriends)}
            />
            <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-600"></div>
            <span className="ml-3 text-sm font-medium">Friends</span>
          </label>
        </div>
        <div className="text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default CommentPanel;
