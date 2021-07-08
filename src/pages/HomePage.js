import React from "react";

import Home from "../components/Home/Home";
import FeatureMovie from "../components/Home/FeatureMovie";
import FeatureTv from "../components/Home/FeatureTv";
import Content from "../components/Home/Content";
import ContentMovie from "../components/Home/ContentMovie";

const HomePage = () => {
  return (
    <div className="container">
      <Home />
      <FeatureMovie />
      <Content />
      <FeatureTv />
      <ContentMovie />
    </div>
  );
};

export default HomePage;
