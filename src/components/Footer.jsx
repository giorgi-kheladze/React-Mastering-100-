import React from "react";
import footerData from "../data/FooterData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrap">
        <p>Working on project:</p>
        {footerData.map((data) => (
          <p key={data.name}>
            {data.name}, {data.surname}
          </p>
        ))}
      </div>
      <p>This is the simple footer.</p>
    </div>
  );
};

export default Footer;
