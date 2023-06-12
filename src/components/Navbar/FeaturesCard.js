import React from 'react'
const FeaturesCard = (props) => {
    return (
      <div>
        <div className=" rounded-lg h-56 border-2 border-white flex flex-col w-96 text-black">
         
          
          <div className="  text-center">
            <h1 className=" pt-10 font-bold font-ubuntu ml-1 text-black text-2xl text-center underline underline-offset-4" >
              {props.FeaturesData.Heading}
            </h1>
            <div className="pt-7 text-center">
              <h1 className="font-semibold ml-1 text-black text-lg text-center">
              {props.FeaturesData.Description}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesCard;