import "./Header.css";

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-child" />
      <div className="formlogo-1-group">
        <img className="formlogo-1-icon1" alt="" src="/formlogo-1@2x.png" />
        <div className="rectangle-parent2">
          <div className="group-child4" />
          <div className="epsearch-parent">
            <img className="epsearch-icon" alt="" src="/epsearch.svg" />
            <div className="search-exams-here">Search exams here</div>
          </div>
        </div>
        <div className="ellipse-parent">
          <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
          <img
            className="carbonnotification-icon"
            alt=""
            src="/carbonnotification.svg"
          />
        </div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="about-us1">About Us</div>
          <div className="contact-us">Contact Us</div>
          <div className="result">Result</div>
          <div className="faq">FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
