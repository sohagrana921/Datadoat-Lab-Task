import Marquee from "react-fast-marquee";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Exclusive = () => {
  return (
    <>
      <SectionTitle heading={"Crush Courses"}></SectionTitle>
      <div className=" my-container flex items-center bg-slate-100">
        <div>
          <Marquee speed={150} autoFill={true}>
            <div className="car">
              <img
                className="h-48 mr-2 rounded-lg"
                src="https://i.ibb.co/pvytZkb/photo-nuts-and-post.webp"
                alt=""
              />
            </div>
            <div className="card">
              <img
                className="h-48 mr-2 rounded-lg"
                src="https://i.ibb.co/zszSLLH/Loving-Landscapes-Cover-363x448.webp"
                alt=""
              />
            </div>

            <div className="card">
              <img
                className="h-48 mr-2 rounded-lg"
                src="https://i.ibb.co/NpLYPjP/photo-nuts-and-shots-243x300.png"
                alt=""
              />
            </div>
            <div className="car">
              <img
                className="h-48 mr-2 rounded-lg"
                src="https://i.ibb.co/wSN6Q1T/color-243x300.png"
                alt=""
              />
            </div>
            <div className="car">
              <img
                className="h-48 mr-2 rounded-lg"
                src="https://i.ibb.co/Jvgf37g/transcending-travel-243x300.png"
                alt=""
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
