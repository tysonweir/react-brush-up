function Card(props) {
  return (
    <div
      className={`block max-w-md w-[400px] ml-4 p-6 bg-gray-200 rounded-lg shadow-lg ${props.className}`}
    >
      <div className="text-gray-900">{props.children}</div>
    </div>
  );
}

export default Card;
