import { Link } from "react-router-dom";
import { Navigation } from "../../data/Navigation";

function MainNav() {
  return (
    <header>
      <nav className="bg-gray-900 border-gray-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <div className="h-8 mr-3 bg-logo bg-no-repeat" alt="..." />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tyson Hughes
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  to={Navigation.home.route}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
                >
                  {Navigation.home.label}
                </Link>
              </li>
              <li>
                <Link
                  to={Navigation.comment.route}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
                >
                  {Navigation.comment.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNav;
