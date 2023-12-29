import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const InfoBox = ({ text, link, btnText }) => (
  <div data-aos="fade-up" className="info-box ">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <>
      <h1
        data-aos="fade-up"
        className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 "
      >
        Hi, I am <span className="font-semibold">Fajri</span>👋
        <br />A Front End Web Developer from Indonesia
      </h1>
    </>
  ),
  2: (
    <>
      <InfoBox
        text="Worked with many companies and picked up many skills along the way"
        link="/about"
        btnText="Learn more"
      />
    </>
  ),
  3: (
    <>
      <InfoBox
        text="Creativity in Mind, Skills in Action: Explore My Portfolio!"
        link="/projects"
        btnText="Visit my portfolio"
      />
    </>
  ),
  4: (
    <>
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/contact"
        btnText="Let's talk"
      />
    </>
  ),
};

const HomeInfo = ({ currentStage }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return renderContent[currentStage] || null;
};

export default HomeInfo;
