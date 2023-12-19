import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const SelectedClasses = () => {
  const [cart, loading] = useCart();

  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lens-masters-academy-server.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>LensMasters | Selected Classes</title>
      </Helmet>

      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full my-8">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((select, index) => (
              <tr key={select._id}>
                <th>{index + 1}</th>
                <td>{select.name}</td>
                <td>{select.instructor}</td>
                <td>$ {select.price}</td>
                <td>
                  <Link to={`/payment/${select._id}`}>
                    <button className="btn btn-success btn-sm">PAY</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(select._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
