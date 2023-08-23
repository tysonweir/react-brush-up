import ShowFullText from "../ShowFullText";

function Description({ description }) {
  return (
    <div className="mt-10 py-10 border-t border-gray-200 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-9/12 px-4">
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
            Description
          </h3>
          <ShowFullText description={description} />
        </div>
      </div>
    </div>
  );
}

export default Description;
