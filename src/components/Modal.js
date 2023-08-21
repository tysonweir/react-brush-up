import Button from "./Button";

function Modal() {
  return (
    <div className="modal">
      <p>are you sure?</p>
      <div className="flex justify-center space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  );
}
export default Modal;
