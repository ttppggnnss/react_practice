import React from "react";

import { Icon } from "@iconify/react";
import facebookIcon from "@iconify/icons-mdi/facebook";
import instagramIcon from "@iconify/icons-mdi/instagram";
import twitterIcon from "@iconify/icons-mdi/twitter";
import youtubeIcon from "@iconify/icons-mdi/youtube";

import "../static/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <Icon className="icon" icon={facebookIcon} />
        <Icon className="icon" icon={instagramIcon} />
        <Icon className="icon" icon={twitterIcon} />
        <Icon className="icon" icon={youtubeIcon} />
      </div>
      <h5 className="team">
        멋쟁이 신사들 - 오인호, 김경재, 김세훈, 박진, 최재빈
      </h5>
    </footer>
  );
}

export default Footer;
