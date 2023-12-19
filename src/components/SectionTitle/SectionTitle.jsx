import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ heading }) => {
  return (
    <div>
      <Fade direction="left">
        <h2
          style={{ borderRadius: "0 30px 0px 30px" }}
          className="text-xl md:text-3xl text-center font-bold bg-orange-500 text-white py-3 md:w-1/2 mx-auto uppercase my-4 md:my-10"
        >
          {heading}
        </h2>
      </Fade>
    </div>
  );
};

export default SectionTitle;
