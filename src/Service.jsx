import React from "react";
import Card from "./Card";
import SDate from "./SData";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
           
             <div className="col-lg-3 mx-auto">
                {SDate.map((value, index) => {
                  return (
                    <Card
                      imgsrc={value.imgsrc}
                      title={value.title}
                      key={index}
                    />
                  );
                })}
             </div>
            
   </>
  );
}

export default Service;
