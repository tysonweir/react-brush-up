import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ title, description }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //nested function
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
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
      {modalIsOpen && (
        <>
          <Modal closeModal={closeModal} />
          <Backdrop closeModal={closeModal} />
        </>
      )}
    </div>
  );
}

export default Todo;
