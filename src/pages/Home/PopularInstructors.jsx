import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUsers from "../../hooks/useUsers";

const PopularInstructor = () => {
  const [users] = useUsers();
  const instructors = users.filter((user) => user.status == "instructor");
  return (
    <div>
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>

      <div className="md:grid my-container grid-cols-3 gap-4 mb-10">
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor._id} className="card glass">
            <figure>
              <img className="w-full h-60" src={instructor.photo} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-semibold text-center">
                {instructor.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
