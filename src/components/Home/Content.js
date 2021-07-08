import React from "react";

import "./Content.css";
import ContentImage from "./ContentImage";

const Content = () => {
  return (
    <div className="container content">
      <div className="row">
        <div className="col">
          <h3 className="my-5">ACTOR'S SPOTLIGHT</h3>
        </div>
        <div className="col">
          <ContentImage
            url="https://upload.wikimedia.org/wikipedia/commons/8/85/Viola_Davis_by_Gage_Skidmore.jpg"
            title="Viola Davis"
          />
        </div>
        <div className="col">
          <ContentImage
            url="https://upload.wikimedia.org/wikipedia/commons/d/dd/Henry_Cavill_by_Gage_Skidmore_2.jpg"
            title="Henry Cavil"
          />
        </div>
        <div className="col">
          <ContentImage
            url="https://m.media-amazon.com/images/M/MV5BMTU0NTUwNjkyN15BMl5BanBnXkFtZTgwMjM0NzEzMTI@._V1_.jpg"
            title="awkwafina"
          />
        </div>
        <div className="col">
          <ContentImage
            url="https://upload.wikimedia.org/wikipedia/commons/4/46/Meryl_Streep_December_2018.jpg"
            title="meryl streep"
          />
        </div>
        <div className="col">
          <ContentImage
            url="https://upload.wikimedia.org/wikipedia/commons/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg"
            title="kevin hart"
          />
        </div>
        <div className="col">
          <ContentImage
            url="https://upload.wikimedia.org/wikipedia/commons/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg"
            title="tom hiddleston"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
