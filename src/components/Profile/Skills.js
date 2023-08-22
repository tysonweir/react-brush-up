function Skills({ skills }) {
  return (
    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
      <div className="flex justify-center">
        <div>
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
            Skills
          </h3>
          {skills.map((skill) => (
            <span key={skill}>{skill} </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
