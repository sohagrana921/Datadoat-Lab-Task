import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://lens-masters-academy-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [courses]);
  const myCourses = courses.filter((course1) => course1.email == user?.email);

  return (
    <div className="my-20 mx-10 md:mx-20 ">
      <Helmet>
        <title>LensMasters | My COURSES</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Courses</th>
              <th>Status</th>
              <th>Enrolled</th>
              <th>FeedBack</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myCourses.map((course1, index) => (
              <tr key={course1._id}>
                <th>{index + 1}</th>
                <td>{course1.name}</td>
                <td>{course1.status}</td>
                <td>{course1.enroll || 0}</td>
                <td>{course1.feedback}</td>
                <td>
                  <Link
                    to={`/updateClass/${course1._id}`}
                    className="btn btn-xs btn-success"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
