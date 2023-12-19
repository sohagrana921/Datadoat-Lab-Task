import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import ManageUsers from "./ManageUsers";
import ManageClass from "./ManageClass";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const AdminDashBoard = () => {
  const [activeTab, setActiveTab] = useState("addClass");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>LensMasters | Admin DashBoard</title>
      </Helmet>
      <SectionTitle heading={"ADMIN DASHBOARD"}></SectionTitle>
      <Tabs className="my-12 text-center">
        <TabList className="flex justify-center gap-1 my-6">
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("addClass")}
              className={` px-8 py-4 rounded text-xl font-bold ${
                activeTab == "addClass" ? " bg-pink-700 text-white" : ""
              }`}
            >
              MANAGE USERS
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("myClass")}
              className={`px-8 py-4 rounded text-xl font-bold ${
                activeTab == "myClass" ? " bg-pink-700 text-white" : ""
              }`}
            >
              MANAGE CLASSES
            </Link>
          </Tab>
        </TabList>
        <TabPanel>
          <ManageUsers></ManageUsers>
        </TabPanel>
        <TabPanel>
          <ManageClass></ManageClass>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminDashBoard;
