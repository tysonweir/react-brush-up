import { Link } from "react-router-dom";
import { Navigation } from "../../data/Navigation";

function Description({ description }) {
  return (
    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-9/12 px-4">
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
            Description
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
            {description}
          </p>
          <Link to={Navigation.about} className="font-normal text-blue-700">
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Description;
