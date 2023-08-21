import Button from "./Button";

function Modal(props) {
  return (
    <div className="modal">
      <p>are you sure?</p>
      <div className="flex justify-center space-x-2">
        <button variant="outline" onClick={props.closeModal}>
          Cancel
        </button>
        <button onClick={props.closeModal}>Confirm</button>
      </div>
    </div>
  );
}
export default Modal;
