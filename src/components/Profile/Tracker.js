import { Navigation } from "../../data/Navigation";
import { useNavigate } from "react-router-dom";

function Tracker() {
  const history = useNavigate();

  const handleRoute = (route) => {
    history(route, { replace: true });
  };

  return (
    <div className="w-full px-4 text-center">
      <div className="flex justify-center py-4 lg:pt-4 pt-8">
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
            22
          </span>
          <span className="text-sm text-blueGray-400">Friends</span>
        </div>
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
            10
          </span>
          <span className="text-sm text-blueGray-400">Photos</span>
        </div>
        <div
          className="lg:mr-4 p-3 text-center cursor-pointer"
          onClick={() => handleRoute(Navigation.comments.route)}
        >
          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
            89
          </span>
          <span className="text-sm text-blueGray-400">Comments</span>
        </div>
      </div>
    </div>
  );
}
export default Tracker;
