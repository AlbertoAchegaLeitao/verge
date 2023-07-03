import React from "react";
import placeholder from "../../assets/video/placeholder.mp4";
import thumbnail from "../../assets/images/thumbnail.JPG";
import {
  AboutContainer,
  AboutSummary,
  SummaryH2,
  SummaryP,
  VideoContainer,
  Video,
} from "./aboutStyles";

const About = () => {
  return (
    <AboutContainer>
      <AboutSummary>
        <SummaryH2>
          Verge is a restaurant where we test the limits of food. <br />
          Together we can delight upon innovative flavors
        </SummaryH2>
        <SummaryP>
          With an international menu carefully curated by Chef Greg, you can
          experience new flavors in a 360º bar while drinking your favorite
          drink!
        </SummaryP>
      </AboutSummary>
      <VideoContainer>
        <Video src={placeholder} controls poster={thumbnail} />
      </VideoContainer>
    </AboutContainer>
  );
};

export default About;
