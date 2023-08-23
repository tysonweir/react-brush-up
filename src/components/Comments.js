import { useRef } from "react";
import Card from "./Card";

function Comments() {
  const commentInputRef = useRef();
  const imageInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault(); // prevents the default browser behavior of submitting the form

    const enteredComment = commentInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const commentData = {
      comment: enteredComment,
      image: enteredImage,
    };

    console.log(commentData);
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
            className="block w-full p-4 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="form-control">
          <label htmlFor="image" className="block mb-2 text-sm font-medium">
            Image
          </label>
          <input
            type="url"
            id="image"
            required
            ref={imageInputRef}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-3 text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default Comments;
