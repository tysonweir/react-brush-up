import { useState, useEffect } from "react";

function Comments() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComments, setLoadedComments] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-started-92652-default-rtdb.firebaseio.com/comments.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const comments = [];
        for (const key in data) {
          const comment = {
            id: key,
            ...data[key],
          };
          comments.push(comment);
        }
        setIsLoading(false);
        setLoadedComments(comments);
        console.log(data);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Comments</h1>
      {loadedComments.map((data) => ({ data }))}
    </div>
  );
}

export default Comments;
