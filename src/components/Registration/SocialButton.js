import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const SocialButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <button type="submit" className="btn btn-primary btn-lg">
            <FacebookIcon />
            Facebook
          </button>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-info btn-lg">
            <MailOutlineIcon />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialButton;
