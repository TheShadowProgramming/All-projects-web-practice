import React from "react";
import "./whyYouNeed.css";

function WhyYouNeed() {
  return (
    <>
      <div className="whyYouNeed-container w-screen h-screen">
        <h1 className="headingWhyYouNeed uppercase text-white">
          why do you need
          <br />
          digital
          <br />
          marketing?
        </h1>
        <div className="rightTextWhyYouNeed text-white">
          The average screen time of any indian is above 5 hrs per day!
          <br />
          Don't you want to catch them where they linger the most?
          <br />
        </div>
        <div className="centerTextWhyYouNeed text-white">
          Did you know that in 2022, the global digital population reached a
          staggering 4.9 billion people?
          <br />
          Now imagine tapping into this vast digital landscape to skyrocket your
          business.
          <br />
          Welcome to the era of digital domination!
        </div>
        <div className="leftTextWhyYouNeed text-white relative">
          <div className="">
            And even if you are satisfied with your business do you want to be
            like Kodak or Nokia and get lost in the sea of fishes?
          </div>
        </div>
        <div className="frWhyYouNeed text-white">Are you for real ?</div>
      </div>
    </>
  );
}

export default WhyYouNeed;
