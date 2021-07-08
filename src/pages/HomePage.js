import React from "react";

import Slider from "../components/Home/Slider";
import FeatureMovie from "../components/Home/FeatureMovie";
import FeatureTv from "../components/Home/FeatureTv";
import ContentActor from "../components/Home/ContentActor";
import ContentMovie from "../components/Home/ContentMovie";

const HomePage = () => {
  return (
    <div className="container">
      <Slider />
      <FeatureMovie />
      <ContentActor />
      <FeatureTv />
      <ContentMovie />
    </div>
  );
};

export default HomePage;
