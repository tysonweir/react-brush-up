import CommentPanel from "../components/CommentPanel";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../data/Navigation";

function Comment() {
  const history = useNavigate();

  function addCommentHandler(commentData) {
    fetch(
      "https://react-started-92652-default-rtdb.firebaseio.com/comments.json",
      {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      history(Navigation.home.route, { replace: true });
    });
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-2">Leave the man a comment</h1>
      <CommentPanel onAddComment={addCommentHandler} />
    </div>
  );
}

export default Comment;
