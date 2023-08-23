function Person({ name, location, profession, education }) {
  return (
    <div className="text-center mt-12">
      <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
        {name}
      </h3>
      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
        {location}
      </div>
      <div className="mb-2 text-blueGray-600">{profession}</div>
      <div className="mb-2 text-blueGray-600">
        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
        {education}
      </div>
    </div>
  );
}

export default Person;
