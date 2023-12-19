import { useContext } from "react";
import StudentDashBoard from "./StudentDashBoard/StudentDashBoard";
import { AuthContext } from "../../providers/AuthProvider";
import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";

import InstructorDashBoard from "./InstructorDashBoard/InstructorDashBoard";
import useUsers from "../../hooks/useUsers";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [users, loading] = useUsers();
  // const [allUsers, setAllUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://lens-masters-academy-server.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllUsers(data);
  //     });
  // }, [allUsers]);
  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }
  const currentUserInfo = users.find((current) => current.email === user.email);

  return (
    <div>
      {currentUserInfo?.status == "admin" ? (
        <AdminDashBoard></AdminDashBoard>
      ) : (
        ""
      )}

      {currentUserInfo?.status == "student" ? (
        <StudentDashBoard></StudentDashBoard>
      ) : (
        ""
      )}
      {currentUserInfo?.status == "instructor" ? (
        <InstructorDashBoard></InstructorDashBoard>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashBoard;
