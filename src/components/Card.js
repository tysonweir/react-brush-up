function Card(props) {
  return (
    <div className="block max-w-sm ml-4 p-6 bg-gray-200 rounded-lg shadow-lg">
      <div className="text-gray-900">{props.children}</div>
    </div>
  );
}

export default Card;
