import { createContext, useState } from "react";

const CommentContext = createContext({
  comments: [],
  totalComments: 0,
  addCommentHandler: (commentData) => {},
  addProfileHandler: (profileData) => {},
});

export function CommentContextProvider(props) {
  const [userComments, setUserComments] = useState([]);

  function addCommentHandler(commentData) {
    setUserComments((prevUserComments) => {
      return prevUserComments.concat(commentData);
    });
  }
  function addProfileHandler(profileData) {
    setUserComments((prevUserComments) => {
      return prevUserComments.concat(profileData);
    });
  }

  const context = {
    comments: userComments,
    totalComments: userComments.length,
    addCommentHandler: addCommentHandler,
    addProfileHandler: addProfileHandler,
  };

  return (
    <CommentContext.Provider value={context}>
      {props.children}
    </CommentContext.Provider>
  );
}

export default CommentContext;
