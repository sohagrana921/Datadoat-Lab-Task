import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const {
      name,
      photoURL,
      instructor,
      email,
      seats,
      price,
      status,
      feedback,
    } = data;
    const newData = {
      name,
      photoURL,
      instructor,
      email,
      seats: parseFloat(seats),
      price: parseFloat(price),
      status,
      feedback,
      enroll: 0,
    };
    fetch("https://lens-masters-academy-server.vercel.app/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Courses Added successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        LensMasters | Add Class
        <title></title>
      </Helmet>

      <div className="mx-10 md:mx-20 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Course Name*</span>
            </label>
            <input
              type="text"
              placeholder="Course Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Course PhotoURL*</span>
            </label>
            <input
              type="text"
              placeholder="Course PhotoURL"
              {...register("photoURL", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-semibold">
                  Instructor Name*
                </span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                {...register("instructor", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Instructor Email*
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                value={user?.email}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Seats*
                </span>
              </label>
              <input
                type="text"
                placeholder="Available Seats"
                {...register("seats", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control w-full mb-4 hidden">
            <label className="label">
              <span className="label-text font-semibold">Status</span>
            </label>
            <input
              type="text"
              value="Pending"
              {...register("status", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <input
            className="btn bg-orange-500 btn-block mt-4"
            type="submit"
            value="Add Course"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
