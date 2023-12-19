import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

const ClassesCard = ({ course }) => {
  const { _id, name, instructor, seats, price, photoURL } = course;
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const navigate = useNavigate();
  const currentUser = users.find((current) => current.email == user?.email);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        courseId: _id,
        name,
        photoURL,
        price,
        email: user.email,
        instructor,
      };
      fetch("https://lens-masters-academy-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enrol the Course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div
      className={`card border shadow-x ${
        seats == "0" ? "bg-red-600" : "bg-slate-100"
      }`}
    >
      <figure>
        <img className="w-full h-60" src={photoURL} alt="" />
      </figure>

      <div className="card-body flex flex-col ">
        <h2>
          <span className="font-bold">Course Name:</span> {name}
        </h2>
        <h2>
          <span className="font-bold">Instructor:</span> {instructor}{" "}
        </h2>

        <h2>
          <span className="font-bold">Available Seats:</span> {seats}
        </h2>
        <h2>
          <span className="font-bold">Price:</span> ${price}
        </h2>

        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            disabled={
              seats == "0" ||
              currentUser?.status == "admin" ||
              currentUser?.status == "instructor"
                ? true
                : false
            }
            className="btn bg-orange-500"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
