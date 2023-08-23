import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comment from "./pages/Comment";
import Comments from "./pages/Comments";
import MainNav from "./components/layout/MainNav";
import { Navigation } from "./data/Navigation";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path={Navigation.home.route} element={<Home />} />
        <Route path={Navigation.comment.route} element={<Comment />} />
        <Route path={Navigation.comments.route} element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
