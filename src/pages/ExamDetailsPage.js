import "./ExamDetailsPage.css";

const ExamDetailsPage = () => {
  return (
    <div className="exam-details-page">
      <header className="nav-bar">
        <div className="nav-bar-child" />
        <div className="formlogo-1-wrapper">
          <img
            className="formlogo-1-icon"
            loading="eager"
            alt=""
            src="/formlogo-1@2x.png"
          />
        </div>
        <div className="home-parent">
          <h2 className="home">Home</h2>
          <h2 className="result">Result</h2>
          <h2 className="faq">FAQ</h2>
        </div>
        <div className="about-us-wrapper">
          <h2 className="about-us">About Us</h2>
        </div>
        <div className="contact-us-wrapper">
          <h2 className="contact-us">Contact Us</h2>
        </div>
        <div className="nav-bar-inner">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <img className="epsearch-icon" alt="" src="/epsearch.svg" />
            <input
              className="search-exams-here"
              placeholder="Search exams here"
              type="text"
            />
          </div>
        </div>
        <img
          className="carbonnotification-icon"
          loading="eager"
          alt=""
          src="/carbonnotification.svg"
        />
        <img
          className="nav-bar-item"
          loading="eager"
          alt=""
          src="/ellipse-1@2x.png"
        />
      </header>
      <main className="frame-parent">
        <div className="epback-parent">
          <img
            className="epback-icon"
            loading="eager"
            alt=""
            src="/epback.svg"
          />
          <h2 className="back">Back</h2>
        </div>
        <section className="frame-group">
          <div className="exam-details-parent">
            <div className="exam-details">
              <div className="exam-details-child" />
              <div className="frame-container">
                <div className="frame-div">
                  <div className="frame-parent1">
                    <div className="rectangle-group">
                      <img
                        className="frame-item"
                        loading="eager"
                        alt=""
                        src="/rectangle-8@2x.png"
                      />
                      <div className="jee-mains-2023-container">
                        <p className="jee-mains-2023">JEE Mains 2023</p>
                        <p className="national-testing-agency">
                          National Testing Agency
                        </p>
                      </div>
                    </div>
                    <div className="solarcalendar-linear-parent">
                      <img
                        className="solarcalendar-linear-icon"
                        loading="eager"
                        alt=""
                        src="/solarcalendarlinear.svg"
                      />
                      <div className="exam-date-23">{`Exam Date: 23 March, 2023 `}</div>
                    </div>
                    <div className="fagroup-parent">
                      <img className="fagroup-icon" alt="" src="/fagroup.svg" />
                      <div className="applicants-20-lakh">
                        Applicants: 20 Lakh+
                      </div>
                    </div>
                  </div>
                  <div className="icon-bookmark-parent">
                    <img
                      className="icon-bookmark"
                      loading="eager"
                      alt=""
                      src="/-icon-bookmark.svg"
                    />
                    <img
                      className="material-symbolsshare-icon"
                      loading="eager"
                      alt=""
                      src="/materialsymbolsshare.svg"
                    />
                  </div>
                </div>
                <div className="frame-inner" />
              </div>
              <div className="posted-50-days-ago-ends-on-31-parent">
                <div className="posted-50-days">
                  Posted 50 days ago, ends on 31 Dec
                </div>
                <button className="apply-now-wrapper">
                  <div className="apply-now">Apply now</div>
                </button>
              </div>
            </div>
            <div className="details">
              <div className="details-child" />
              <div className="exam-description-parent">
                <h2 className="exam-description">Exam Description:</h2>
                <h2 className="jee-main-is-container">
                  <ul className="jee-main-is-a-standardized-tes">
                    <li className="jee-main-is">
                      JEE Main is a standardized test conducted across different
                      states in India.
                    </li>
                    <li className="the-exam-is">
                      The exam is held at an undergraduate level to offer
                      admissions to some of the best engineering and technical
                      institutions that are Government funded or
                      privately-owned.
                    </li>
                    <li>
                      The exam conducting authority considers the best NTA score
                      in preparing the ranks/merit list.
                    </li>
                  </ul>
                </h2>
              </div>
              <div className="eligibility-parent">
                <h2 className="eligibility">Eligibility:</h2>
                <h2 className="age-limit-container">
                  <ul className="age-limit-no-age-limit-quali">
                    <li className="age-limit-">Age Limit - No age limit</li>
                    <li className="qualifying-exam-">
                      Qualifying Exam - Class 12/Equivalent Exam
                    </li>
                    <li className="percentage-at">
                      Percentage - At least 75% in class 12/equivalent exam
                    </li>
                    <li className="year-of-passing">
                      Year of Passing - 2021, 2022 or appearing in 2023
                    </li>
                    <li>
                      Number of attempts - Candidate can appear in JEE Main for
                      3 consecutive years after passing their class
                      12/equivalent exam
                    </li>
                  </ul>
                </h2>
              </div>
              <div className="important-details-parent">
                <h2 className="important-details">Important Details:</h2>
                <h2 className="jee-main-2023-container">
                  <ul className="jee-main-2023-january-session">
                    <li className="jee-main-2023-january-session1">
                      <span className="jee-main-2023">
                        JEE Main 2023 January Session:
                      </span>
                      <span>
                        {" "}
                        NTA released the JEE Main 2023 session 1 will be
                        conducted between 24th January and 1st February, 2023.
                      </span>
                    </li>
                    <li>
                      <span className="jee-main-20231">
                        JEE Main 2023 April Session:
                      </span>
                      <span className="nta-released-the">
                        {" "}
                        NTA released the JEE Main 2023 session 1 will be
                        conducted between 1st April, 2023 and 15th April, 2023.
                      </span>
                    </li>
                  </ul>
                </h2>
              </div>
              <div className="line-parent">
                <div className="line-div" />
                <div className="frame-parent2">
                  <div className="rectangle-container">
                    <div className="rectangle-div" />
                    <img
                      className="rifacebook-fill-icon"
                      loading="eager"
                      alt=""
                      src="/rifacebookfill.svg"
                    />
                  </div>
                  <div className="group-div">
                    <div className="frame-child1" />
                    <img
                      className="pajamastwitter-icon"
                      loading="eager"
                      alt=""
                      src="/pajamastwitter.svg"
                    />
                  </div>
                  <div className="rectangle-parent1">
                    <div className="frame-child2" />
                    <img
                      className="rilinkedin-fill-icon"
                      loading="eager"
                      alt=""
                      src="/rilinkedinfill.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exam-suggestion">
            <div className="exam-suggestion-child" />
            <div className="exams-you-might-be-interested-wrapper">
              <h2 className="exams-you-might">
                Exams you might be interested in
              </h2>
            </div>
            <div className="frame-parent3">
              <div className="frame-parent4">
                <div className="frame-parent5">
                  <div className="frame-parent6">
                    <div className="rectangle-parent2">
                      <img
                        className="rectangle-icon"
                        loading="eager"
                        alt=""
                        src="/rectangle-5@2x.png"
                      />
                      <div className="fagroup-group">
                        <img
                          className="fagroup-icon1"
                          alt=""
                          src="/fagroup-1.svg"
                        />
                        <div className="frame-child3" />
                      </div>
                    </div>
                    <div className="beee-2023-bharat-university-parent">
                      <div className="beee-2023-bharat-container">
                        <p className="beee-2023">
                          <b>BEEE 2023</b>
                        </p>
                        <p className="bharat-university">Bharat University</p>
                      </div>
                      <div className="more-than-5">More than 5 Lakhs</div>
                    </div>
                  </div>
                  <div className="frame-parent7">
                    <div className="frame-parent8">
                      <img
                        className="group-icon"
                        loading="eager"
                        alt=""
                        src="/group-101.svg"
                      />
                      <div className="div">₹ 1600</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="view-details-parent">
                        <div className="view-details">View details</div>
                        <img
                          className="oouinext-ltr-icon"
                          alt=""
                          src="/oouinextltr.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child4" />
              </div>
              <div className="frame-parent9">
                <div className="frame-parent10">
                  <div className="rectangle-parent3">
                    <img
                      className="frame-child5"
                      alt=""
                      src="/rectangle-5-1@2x.png"
                    />
                    <div className="ts-eamcet-2023-container">
                      <p className="ts-eamcet-2023">
                        <b>TS EAMCET 2023</b>
                      </p>
                      <p className="tsche">TSCHE</p>
                    </div>
                  </div>
                  <div className="frame-parent11">
                    <div className="frame-parent12">
                      <div className="frame-parent13">
                        <div className="fagroup-container">
                          <img
                            className="fagroup-icon2"
                            alt=""
                            src="/fagroup-1.svg"
                          />
                          <div className="frame-child6" />
                        </div>
                        <div className="more-than-15">More than 15 Lakhs</div>
                      </div>
                      <div className="frame-parent14">
                        <img
                          className="frame-child7"
                          alt=""
                          src="/group-101.svg"
                        />
                        <div className="div1">₹ 1000</div>
                      </div>
                    </div>
                    <div className="frame-wrapper1">
                      <div className="view-details-group">
                        <div className="view-details1">View details</div>
                        <img
                          className="oouinext-ltr-icon1"
                          alt=""
                          src="/oouinextltr.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child8" />
              </div>
              <div className="frame-parent15">
                <div className="frame-parent16">
                  <div className="rectangle-parent4">
                    <img
                      className="frame-child9"
                      alt=""
                      src="/rectangle-5-2@2x.png"
                    />
                    <div className="srmjee-2023-srmst-container">
                      <p className="srmjee-2023">
                        <b>SRMJEE 2023</b>
                      </p>
                      <p className="srmst">SRMST</p>
                    </div>
                  </div>
                  <div className="frame-parent17">
                    <div className="frame-parent18">
                      <div className="frame-parent19">
                        <div className="fagroup-parent1">
                          <img
                            className="fagroup-icon3"
                            alt=""
                            src="/fagroup-1.svg"
                          />
                          <div className="frame-child10" />
                        </div>
                        <div className="more-than-10">More than 10 Lakhs</div>
                      </div>
                      <div className="frame-parent20">
                        <img
                          className="frame-child11"
                          alt=""
                          src="/group-101.svg"
                        />
                        <div className="div2">₹ 1000</div>
                      </div>
                    </div>
                    <div className="frame-wrapper2">
                      <div className="view-details-container">
                        <div className="view-details2">View details</div>
                        <img
                          className="oouinext-ltr-icon2"
                          alt=""
                          src="/oouinextltr.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child12" />
              </div>
              <div className="frame-parent21">
                <div className="frame-parent22">
                  <div className="frame-parent23">
                    <div className="rectangle-parent5">
                      <img
                        className="frame-child13"
                        alt=""
                        src="/rectangle-5-3@2x.png"
                      />
                      <div className="fagroup-parent2">
                        <img
                          className="fagroup-icon4"
                          alt=""
                          src="/fagroup-1.svg"
                        />
                        <div className="frame-child14" />
                      </div>
                    </div>
                    <div className="vitjee-2023-vellore-institute-parent">
                      <div className="vitjee-2023-vellore-container">
                        <p className="vitjee-2023">
                          <b>VITJEE 2023</b>
                        </p>
                        <p className="vellore-institute-of">
                          Vellore Institute of Technology
                        </p>
                      </div>
                      <div className="more-than-101">More than 10 Lakhs</div>
                    </div>
                  </div>
                  <div className="frame-parent24">
                    <div className="frame-parent25">
                      <img
                        className="frame-child15"
                        alt=""
                        src="/group-101.svg"
                      />
                      <div className="div3">₹ 1500</div>
                    </div>
                    <div className="frame-wrapper3">
                      <div className="view-details-parent1">
                        <div className="view-details3">View details</div>
                        <img
                          className="oouinext-ltr-icon3"
                          alt=""
                          src="/oouinextltr.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child16" />
              </div>
            </div>
            <button className="view-all-wrapper">
              <div className="view-all">View all</div>
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-child" />
        <div className="frame-parent26">
          <div className="formlogo-1-parent">
            <img className="formlogo-1-icon1" alt="" src="/formlogo-1@2x.png" />
            <div className="icbaseline-facebook-parent">
              <img
                className="icbaseline-facebook-icon"
                loading="eager"
                alt=""
                src="/icbaselinefacebook.svg"
              />
              <img
                className="mdiinstagram-icon"
                loading="eager"
                alt=""
                src="/mdiinstagram.svg"
              />
              <img
                className="bitwitter-x-icon"
                loading="eager"
                alt=""
                src="/bitwitterx.svg"
              />
              <img
                className="mdilinkedin-icon"
                loading="eager"
                alt=""
                src="/mdilinkedin.svg"
              />
            </div>
          </div>
          <div className="frame-parent27">
            <div className="frame-parent28">
              <div className="about-us-parent">
                <div className="about-us1">About Us</div>
                <div className="sitemap">Sitemap</div>
                <div className="credits">Credits</div>
                <div className="help-center">Help Center</div>
                <div className="community-guidelines">Community Guidelines</div>
              </div>
              <div className="accessibility-parent">
                <div className="accessibility">Accessibility</div>
                <div className="mobile">Mobile</div>
                <div className="marketing">Marketing</div>
                <div className="advertising">Advertising</div>
                <div className="report-issue">Report Issue</div>
              </div>
            </div>
            <div className="privacy-policy-parent">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="trust-safety">{`Trust & Safety`}</div>
            </div>
          </div>
          <div className="instance-parent">
            <div className="icbaseline-apple-parent">
              <img
                className="icbaseline-apple-icon"
                loading="eager"
                alt=""
                src="/icbaselineapple.svg"
              />
              <div className="download-on-the-container">
                <p className="download-on-the">Download on the</p>
                <p className="app-store">App Store</p>
              </div>
            </div>
            <div className="bxlplay-store-parent">
              <img
                className="bxlplay-store-icon"
                loading="eager"
                alt=""
                src="/bxlplaystore.svg"
              />
              <div className="download-on-the-container1">
                <p className="download-on-the1">Download on the</p>
                <p className="play-store">Play Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line-group">
          <div className="frame-child17" />
          <div className="all-trademarks-are-the-propert-wrapper">
            <div className="all-trademarks-are-container">
              <p className="all-trademarks-are">
                All trademarks are the property of their respective owners
              </p>
              <p className="all-rights-reserved">
                All rights reserved © 2024 FormEase
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExamDetailsPage;
