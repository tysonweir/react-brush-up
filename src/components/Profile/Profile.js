import Image from "./Image";
import Person from "./Person";
import Description from "./Description";
import Skills from "./Skills";

function Profile({ data }) {
  return data ? (
    data.map((temp) => (
      <section key={temp.id} className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <Image image={temp.image} />
              <Person
                name={temp.name}
                location={temp.location}
                profession={temp.profession}
                education={temp.education}
              />
              <Description description={temp.description} />
              <Skills skills={temp.skills} />
            </div>
          </div>
        </div>
      </section>
    ))
  ) : (
    <>something failed</>
  );
}
export default Profile;
