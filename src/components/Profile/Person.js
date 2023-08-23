function Person({ name, location, profession, education }) {
  return (
    <div className="text-center mt-5">
      <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-700">
        {name}
      </h3>
      <div className="text-sm leading-normal mb-2 text-gray-600 font-bold uppercase">
        {location}
      </div>
      <div className="mb-2 text-gray-600">{profession}</div>
      <div className="mb-2 text-blue-900">{education}</div>
    </div>
  );
}

export default Person;
