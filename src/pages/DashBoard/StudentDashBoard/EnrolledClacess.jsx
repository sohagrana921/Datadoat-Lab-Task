import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const EnrolledClacess = () => {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://lens-masters-academy-server.vercel.app/paymentHistory/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, [user?.email]);
  console.log(history);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {history.map((enrolled, index) => (
            <tr key={enrolled._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={enrolled.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{enrolled.courseName}</td>
              <td>{enrolled.instructor}</td>
              <td>${enrolled.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClacess;
