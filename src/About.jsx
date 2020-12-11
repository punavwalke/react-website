import React from "react";
import Common from "./Common";
import web from "./images/laptop.jpg";
function About() {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
