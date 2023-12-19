import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import SelectedClasses from "./SelectedClasses";
import EnrolledClacess from "./EnrolledClacess";
import PaymentHistory from "./PaymentHistory";
const StudentDashBoard = () => {
  const [activeTab, setActiveTab] = useState("selected");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <Helmet>
        LensMasters | Student Dashboard
        <title></title>
      </Helmet>
      <SectionTitle heading={"Student DASHBOARD"}></SectionTitle>

      <Tabs className="my-12 text-center">
        <TabList className="flex justify-center gap-1 my-6">
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("selected")}
              className={` px-8 py-2 rounded text-lg font-bold ${
                activeTab == "selected" ? " bg-pink-700 text-white" : ""
              }`}
            >
              MY SELECTED COURSES
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("myClass")}
              className={`px-8 uppercase py-2 rounded text-lg font-bold ${
                activeTab == "myClass" ? " bg-pink-700 text-white" : ""
              }`}
            >
              My Enrolled Classes
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("history")}
              className={`px-8 uppercase py-2 rounded text-lg font-bold ${
                activeTab == "history" ? " bg-pink-700 text-white" : ""
              }`}
            >
              Payment History
            </Link>
          </Tab>
        </TabList>
        <TabPanel>
          <SelectedClasses></SelectedClasses>
        </TabPanel>
        <TabPanel>
          <EnrolledClacess></EnrolledClacess>
        </TabPanel>
        <TabPanel>
          <PaymentHistory></PaymentHistory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default StudentDashBoard;
