import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  // const [btnDisable, setBtnDisable] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://lens-masters-academy-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCourses(data);
      });
  }, [courses]);
  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }
  const approvedCourse = courses.filter(
    (course) => course.status == "Approved"
  );
  return (
    <div>
      <SectionTitle heading={"Courses"}></SectionTitle>

      <div className="md:grid grid-cols-3 gap-2 my-container my-20">
        {approvedCourse.map((course) => (
          <ClassesCard key={course._id} course={course}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
