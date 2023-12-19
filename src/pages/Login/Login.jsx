import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      reset();
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>LensMasters | Login</title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="md:w-1/2 max-w-sm ">
          <h1 className="text-5xl font-bold text-center my-4">Please Login</h1>
          <div className="rounded-xl bg-slate-50">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className="input input-bordered w-full"
                  />
                  <p onClick={passwordVisibility} className="-ml-10">
                    <FaEye></FaEye>
                  </p>
                </div>
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center ">
              <small>
                New to LensMasters ?
                <Link to="/register">
                  <span className="text-blue-600"> Create an account</span>
                </Link>
              </small>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className="text-center md:w-1/2 lg:text-left">
          <img
            className="rounded"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
