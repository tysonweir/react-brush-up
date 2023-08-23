import { useEffect, useState } from "react";
import Profile from "../components/Profile/Profile";

function Home() {
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComments, setLoadedComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [totalFriends, setTotalFriends] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-started-92652-default-rtdb.firebaseio.com/profile.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const profile = [];
        for (const key in data) {
          const temp = {
            id2: key,
            ...data[key],
          };
          profile.push(temp);
        }
        setIsLoading(false);
        setProfileData(profile);
        console.log(profile);
      });

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

        comments.forEach((element) => {
          if (element.isFriends) {
            setTotalFriends((totalFriends) => totalFriends + 1);
          }
          setTotalComments((totalComments) => totalComments + 1);
        });

        setIsLoading(false);
        setLoadedComments(comments);
      });
  }, []);

  return !isLoading ? (
    <Profile
      profileData={profileData}
      totalComments={totalComments}
      totalFriends={totalFriends}
    />
  ) : (
    <section>
      <p>Loading...</p>
    </section>
  );
}

export default Home;
