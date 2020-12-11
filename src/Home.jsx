import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./images/laptop.jpg";
function Home() {
  return (
    <>
      <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
