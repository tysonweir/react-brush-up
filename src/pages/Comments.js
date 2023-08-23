import { useState, useEffect } from "react";
import Card from "../components/Card";
import ShowFullText from "../components/ShowFullText";

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
        console.log(comments);
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
      <label className="text-5xl text-center justify-center flex text-gray-700 p-4">
        Comments
      </label>
      <div className="flex flex-wrap rounded-lg">
        {loadedComments.map((data) => (
          <div
            className="mt-4 ml-4 block rounded-lg bg-gray-100 shadow-lg"
            key={data.id}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="rounded-t-lg w-[300px] h-[200px] object-cover mx-auto"
                src={data.image}
                alt="..."
              />

              {/* <ShowFullText
                className="w-[300px]"
                description={data.comment}
                length={40}
              /> */}

              <p className="mb-4 mt-2 p-4 w-[300px] overflow-auto text-center text-neutral-600">
                {data.comment}
              </p>
              <p className="text-sm leading-normal mb-2 text-gray-400 font-bold uppercase mt-auto">
                {data.isFriends ? "Friends" : "Not Friends"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
