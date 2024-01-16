import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-child" />
      <div className="line-parent1">
        <div className="group-child3" />
        <div className="group-parent5">
          <div className="formlogo-1-parent">
            <img className="formlogo-1-icon" alt="" src="/formlogo-1@2x.png" />
            <div className="icbaseline-facebook-parent">
              <img
                className="icbaseline-facebook-icon1"
                alt=""
                src="/icbaselinefacebook.svg"
              />
              <img
                className="mdiinstagram-icon1"
                alt=""
                src="/mdiinstagram.svg"
              />
              <img className="bitwitter-x-icon1" alt="" src="/bitwitterx.svg" />
              <img
                className="mdilinkedin-icon1"
                alt=""
                src="/mdilinkedin.svg"
              />
            </div>
          </div>
          <div className="group-parent6">
            <div className="privacy-policy-parent">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="trust-safety">{`Trust & Safety`}</div>
            </div>
            <div className="about-us-parent">
              <div className="privacy-policy">About Us</div>
              <div className="terms-conditions">Sitemap</div>
              <div className="trust-safety">Credits</div>
              <div className="help-center">Help Center</div>
              <div className="community-guidelines">Community Guidelines</div>
            </div>
            <div className="accessibility-parent">
              <div className="privacy-policy">Accessibility</div>
              <div className="terms-conditions">Mobile</div>
              <div className="trust-safety">Marketing</div>
              <div className="help-center">Advertising</div>
              <div className="community-guidelines">Report Issue</div>
            </div>
          </div>
          <div className="instance-parent">
            <FrameComponent1
              icbaselineApple="/icbaselineapple.svg"
              frameDivPosition="absolute"
              frameDivTop="0px"
              frameDivLeft="0px"
            />
            <FrameComponent
              bxlplayStore="/bxlplaystore.svg"
              frameDivPosition="absolute"
              frameDivTop="74px"
              frameDivLeft="0px"
            />
          </div>
        </div>
        <div className="all-trademarks-are-container">
          <p className="all-trademarks-are">
            All trademarks are the property of their respective owners
          </p>
          <p className="all-trademarks-are">
            All rights reserved © 2024 FormEase
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
