import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-400 p-4">
        <h1 className="text-white text-2xl font-semibold">My Todo List</h1>
      </header>
      <div className="flex flex-col mt-3">
        <Todo title={"clean house"} />
        <Todo title={"learn react"} />
        <Todo title={"do next.js"} />
      </div>
    </div>
  );
}

export default App;
