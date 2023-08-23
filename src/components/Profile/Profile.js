import Image from "./Image";
import Person from "./Person";
import Description from "./Description";
import Skills from "./Skills";
import Tracker from "./Tracker";

function Profile({ profileData, totalComments, totalFriends }) {
  return profileData ? (
    profileData.map((data) => (
      <section
        key={data.id}
        className="pt-16 transition-all duration-[200ms] ease-in-out"
      >
        <div className="w-full lg:w-6/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <Image image={data.image} />
              <Person
                name={data.name}
                location={data.location}
                profession={data.profession}
                education={data.education}
              />
              <Tracker
                totalComments={totalComments}
                totalFriends={totalFriends}
              />
              <Description description={data.description} />
              <Skills skills={data.skills} />
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
