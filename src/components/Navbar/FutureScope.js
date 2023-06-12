import React from 'react'
import FutureScopeCard from './FutureScopeCard';

const FutureScope = () => {
    const FeaturesData = [
        {
         
          Heading: "Add zkRollup",
          Description:
            "Using zk Snarks to make our platform better and secure",
        },
        {
         
          Heading: "Add on chain proofs",
          Description:
            "Add on chain proofs for the users and companies",
        },
        {
         
          Heading: "Metaverse meetings",
          Description:
            "Add a metaverse meeting feature to the application",
        },
      ];
    
      return (
        <div className="mt-10 font-poppins" id="features">
          <p className=" text-4xl text-[black] font-bold ml-48 mb-12">
            Future Scope{" "}
          </p>
          <div className="flex flex-row justify-center gap-10 p-20">
            <FutureScopeCard FeaturesData={FeaturesData[0]} />
            <FutureScopeCard FeaturesData={FeaturesData[1]} />
            <FutureScopeCard FeaturesData={FeaturesData[2]} />
          </div>
        </div>
      );
};

export default FutureScope