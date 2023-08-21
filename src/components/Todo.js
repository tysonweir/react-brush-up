import Button from "./Button";

function Todo({ title, description }) {
  //nested function
  function deleteHandler() {
    alert("Edit");
  }

  return (
    <div className="flex flex-col max-w-md rounded overflow-hidden shadow-lg w-[400px]">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-3 flex justify-end">
        <Button handler={deleteHandler} variant="solid">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Todo;
