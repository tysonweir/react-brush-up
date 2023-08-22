function Image({ image }) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full px-4 flex justify-center">
        <div className="relative">
          <img
            alt="..."
            src={image ? image : "https://via.placeholder.com/150"}
            className="shadow-xl rounded-full h-auto align-middle border-none -mt-12 max-w-[150px]"
          />
        </div>
      </div>
    </div>
  );
}
export default Image;
