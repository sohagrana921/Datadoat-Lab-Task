import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
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
            <th>Course Name</th>
            <th>Payment Date</th>
            <th>Price</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {history.map((enrolled, index) => (
            <tr key={enrolled._id}>
              <th>{index + 1}</th>

              <td>{enrolled.courseName}</td>
              <td>{enrolled.date}</td>
              <td>${enrolled.price}</td>
              <td>{enrolled.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
