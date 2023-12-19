import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const GrowSkills = () => {
  return (
    <div className="md:flex my-container items-center my-8">
      <div className="md:w-1/2 px-4 my-2 ">
        <Fade direction="left">
          <div>
            <h2 className="md:text-5xl font-extrabold text-orange-500 ">
              GROW YOUR SKILLS <br />
            </h2>
            <p className="font-semibold my-4">
              By developing these skills, you can also begin your path to
              personal development, which can help you maximise your potential
              and achieve your career goals in record time.
            </p>
            <p>
              <Link to="/classes" className="btn btn-outline btn-success">
                Sell All Courses
              </Link>
            </p>
          </div>
        </Fade>
      </div>
      <Fade></Fade>
      <div>
        <Fade direction="right">
          <img
            className="rounded-lg"
            src="https://i1.wp.com/encoremusicians.com/blog/wp-content/uploads/2018/04/camera-dslr-focus-8140.jpg?fit=740%2C493&ssl=1"
            alt=""
          />
        </Fade>
      </div>
    </div>
  );
};

export default GrowSkills;
