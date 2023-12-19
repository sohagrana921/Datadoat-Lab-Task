import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructors";

import GrowSkills from "./GrowSkills";
import Exclusive from "./Exclusive";

const Home = () => {
  return (
    <div>
      <Helmet>
        LensMasters | Home
        <title></title>
      </Helmet>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <GrowSkills></GrowSkills>
      <Exclusive></Exclusive>
    </div>
  );
};

export default Home;
