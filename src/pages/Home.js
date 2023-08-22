import { DummyData } from "../data/DummyData";
import Profile from "../components/Profile/Profile";

function Home() {
  return DummyData ? <Profile data={DummyData} /> : <>something failed</>;
}

export default Home;
