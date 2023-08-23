import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/About";
import NewPage from "./pages/NewPage";
import MainNav from "./components/layout/MainNav";
import { Navigation } from "./data/Navigation";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path={Navigation.home.route} element={<Home />} />
        <Route path={Navigation.about.route} element={<Favorites />} />
        <Route path={Navigation.new.route} element={<NewPage />} />
      </Routes>
    </div>
  );
}

export default App;
