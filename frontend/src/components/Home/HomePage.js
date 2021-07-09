import React from "react";

import Slider from "./Slider";
import FeatureMovie from "./FeatureMovie";
import FeatureTv from "./FeatureTv";
import ContentActor from "./ContentActor";
import ContentMovie from "./ContentMovie";

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
