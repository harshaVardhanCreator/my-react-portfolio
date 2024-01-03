import React from "react";
import Slider from "react-slick";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import { DiVisualstudio, DiGithub, DiWindows } from "react-icons/di";
import { SiSlack, SiTwilio, SiWix } from "react-icons/si";

function NoArrow() {
  return <div style={{ display: "none" }} />;
}

function ToolStack() {
  const isSmallScreen = window.innerWidth <= 738;

  const settings = {
    infinite: true,
    nextArrow: <NoArrow />,
    prevArrow: <NoArrow />,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  if (window.innerWidth <= 738) {
    settings.slidesToShow = 3;
    settings.speed = 2000;
    settings.pauseOnHover = false;
  } else {
    settings.slidesToShow = 5;
    settings.speed = 1000;
    settings.pauseOnHover = true;
  }

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slide">
          <div className="img">
            <Tooltip title="Visual Studio Code" placement="top" arrow>
              <Button className="techButton">
                <DiVisualstudio size={80} color="white" />
                {isSmallScreen && <div className="techName">Visual Studio</div>}
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="GitHub" placement="top" arrow>
              <Button>
                <DiGithub size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Windows" placement="top" arrow>
              <Button>
                <DiWindows size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Slack" placement="top" arrow>
              <Button>
                <SiSlack size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Twilio" placement="top" arrow>
              <Button>
                <SiTwilio size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Wix" placement="top" arrow>
              <Button>
                <SiWix size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ToolStack;
