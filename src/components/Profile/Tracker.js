import { Navigation } from "../../data/Navigation";
import { useNavigate } from "react-router-dom";

function Tracker({ totalComments, totalFriends }) {
  const history = useNavigate();

  const handleRoute = (route) => {
    history(route, { replace: true });
  };

  return (
    <div className="text-red text-center">
      <div className="flex justify-center py-4 lg:pt-4 pt-8">
        <div
          className="p-3 text-center cursor-pointer"
          onClick={() => handleRoute(Navigation.comments.route)}
        >
          <span className="text-xl block uppercase tracking-wide text-gray-600">
            {totalFriends}
          </span>
          <span className="text-sm text-gray-900">Friends</span>
        </div>
        <div
          className="p-3 text-center cursor-pointer"
          onClick={() => handleRoute(Navigation.comments.route)}
        >
          <span className="text-xl block uppercase tracking-wide text-gray-600">
            {totalComments}
          </span>
          <span className="text-sm text-gray-900">Comments</span>
        </div>
      </div>
    </div>
  );
}
export default Tracker;
