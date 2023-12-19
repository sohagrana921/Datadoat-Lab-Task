import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UpdateClasses = () => {
  const { user } = useContext(AuthContext);
  const updateCourse = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { _id, seats, price, photoURL, name } = updateCourse;

  const onSubmit = (data) => {
    fetch(
      `https://lens-masters-academy-server.vercel.app/updateCourse/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Courses Updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myClasses");
        }
      });
  };

  return (
    <div>
      <Helmet>
        LensMasters | Update Class
        <title></title>
      </Helmet>
      <SectionTitle heading={"Update Course"}></SectionTitle>
      <div className="mx-10 md:mx-20 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Course Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
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
              defaultValue={photoURL}
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
                defaultValue={seats}
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
                defaultValue={price}
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
            value="Update Course"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateClasses;
