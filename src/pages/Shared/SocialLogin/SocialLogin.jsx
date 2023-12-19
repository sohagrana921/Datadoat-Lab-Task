import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        status: "student",
        photo: loggedInUser.photoURL,
      };
      fetch("https://lens-masters-academy-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider">Or Login Using</div>
      <div className="flex justify-center">
        <Link
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center bg-slate-300 p-4 rounded-lg mb-5"
        >
          <img
            className="h-12 w-12"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            alt=""
          />
          <h1 className="text-4xl font-semibold ml-4">Google</h1>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
