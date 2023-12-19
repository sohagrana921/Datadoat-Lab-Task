import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCourse from "../../hooks/useCourse";

const PopularClass = () => {
  const [course] = useCourse();

  const sortedData = course.sort((a, b) => b.enroll - a.enroll);
  const mostEnrolls = sortedData.slice(0, 6);
  return (
    <div>
      <SectionTitle heading={"Popular Courses"}></SectionTitle>

      <div className="md:grid my-container grid-cols-3 gap-4">
        {mostEnrolls.map((mostEnroll) => (
          <div key={mostEnroll._id} className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-60"
                src={mostEnroll.photoURL}
                alt="Shoes"
              />
            </figure>

            <div className="card-body flex flex-col">
              <h2>
                <span className="font-bold">Name: {mostEnroll.name} </span>
              </h2>
              <h2>
                <span className="font-bold">
                  Enrolled Student: {mostEnroll.enroll}
                </span>
              </h2>
              <h2>
                <span className="font-bold">
                  Instructor : {mostEnroll.instructor}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
