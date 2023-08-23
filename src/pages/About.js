import Comments from "../components/Comments";

function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h1 className="mb-2">The About Page</h1>
      <Comments />
    </div>
  );
}

export default About;
