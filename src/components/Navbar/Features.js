import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const FeaturesData = [
    {
   
      Heading: "Company management",
      Description:
        "Organisations can manage their employees, their professional and payroll details",
    },
    {
     
      Heading: "One Click Pay",
      Description:
        "Organisation can pay their employees with just one click after connecting the hardware wallet",
    },
    {
      
      Heading: "Schedule settings",
      Description:
        "Meeting handling and calendar settings for organisations and employees",
    },
  ];

  return (
    <div className="mt-10 font-poppins" id="features">
      <p className=" text-4xl text-black font-bold ml-48 mb-12">
        Features{" "}
      </p>
      <div className="flex flex-row justify-center gap-10 p-20">
        <FeaturesCard FeaturesData={FeaturesData[0]} />
        <FeaturesCard FeaturesData={FeaturesData[1]} />
        <FeaturesCard FeaturesData={FeaturesData[2]} />
      </div>
    </div>
  );
};

export default Features;
