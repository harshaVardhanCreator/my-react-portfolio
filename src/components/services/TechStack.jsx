import React from "react";
import Slider from "react-slick";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiJest,
  SiGraphql,
} from "react-icons/si";
import "./services1.scss";

function NoArrow() {
  return <div style={{ display: "none" }} />;
}

function Techstack() {
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
            <Tooltip title="C++" placement="top" arrow>
              <Button className="techButton">
                <CgCPlusPlus size={80} color="white" />
                {isSmallScreen && <div className="techName">C++</div>}
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Python" placement="top" arrow>
              <Button>
                <DiPython size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="JavaScript" placement="top" arrow>
              <Button>
                <DiJavascript1 size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="TypeScript" placement="top" arrow>
              <Button>
                <SiTypescript size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Java" placement="top" arrow>
              <Button>
                <DiJava size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Jest" placement="top" arrow>
              <Button>
                <SiJest size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="React" placement="top" arrow>
              <Button>
                <DiReact size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Next" placement="top" arrow>
              <Button>
                <SiNextdotjs size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="MySQL" placement="top" arrow>
              <Button>
                <DiMysql size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Postgresql" placement="top" arrow>
              <Button>
                <SiPostgresql size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Git" placement="top" arrow>
              <Button>
                <DiGit size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="Nodejs" placement="top" arrow>
              <Button>
                <DiNodejs size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Tooltip title="GraphQL" placement="top" arrow>
              <Button>
                <SiGraphql size={80} color="white" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Techstack;
