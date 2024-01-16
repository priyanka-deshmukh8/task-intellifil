import PriceCard from "./PriceCard";
import "./PriceFilter.css";

const PriceFilter = () => {
  return (
    <div className="group-wrapper">
      <div className="group-container">
        <div className="rectangle-container">
          <div className="rectangle-div" />
          <div className="line-group">
            <div className="line-div" />
            <div className="group-div">
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-5@2x.png"
              />
              <div className="jee-mains-2023-container">
                <p className="jee-mains-2023">JEE Mains 2023</p>
                <p className="national-testing-agency">
                  National Testing Agency
                </p>
              </div>
              <img
                className="icon-bookmark2"
                alt=""
                src="/-icon-bookmark.svg"
              />
            </div>
            <div className="group-parent1">
              <div className="fagroup-group">
                <img className="fagroup-icon2" alt="" src="/fagroup.svg" />
                <div className="more-than-20">More than 20 Lakhs</div>
              </div>
              <div className="solarwallet-bold-group">
                <img
                  className="fagroup-icon2"
                  alt=""
                  src="/solarwalletbold.svg"
                />
                <div className="more-than-20">₹ 1200</div>
              </div>
              <div className="frame-group">
                <div className="engineering-container">
                  <div className="iit">Engineering</div>
                </div>
                <div className="iit-wrapper">
                  <div className="iit">IIT</div>
                </div>
                <div className="pcm-container">
                  <div className="iit">PCM</div>
                </div>
              </div>
              <div className="view-details-group">
                <div className="view-details1">View details</div>
                <img
                  className="oouinext-ltr-icon2"
                  alt=""
                  src="/oouinextltr.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <PriceCard
          labelText="/rectangle-5@2x.png"
          pageTitle="AP EAPCET 2023"
          entityName="APSCHE"
          iconBookmarkImageUrl={`🦆 icon "bookmark"_7`}
          groupIconTextGroupIconIma="/fagroup.svg"
          priceRangeLabel="More than 15 Lakhs"
          componentImageUrl="/solarwalletbold.svg"
          textValue="₹ 1000"
          componentText="/oouinextltr.svg"
          propLeft="calc(50% + 10px)"
          propWidth="150px"
          propWidth1="150px"
        />
        <PriceCard
          labelText="/rectangle-5@2x.png"
          pageTitle="Civil Services 2023"
          entityName="Union Public Service Commission"
          iconBookmarkImageUrl="/-icon-bookmark.svg"
          groupIconTextGroupIconIma="/fagroup.svg"
          priceRangeLabel="More than 15 Lakhs"
          componentImageUrl="/solarwalletbold.svg"
          textValue="₹ 1500"
          componentText="/oouinextltr.svg"
          propLeft="calc(50% - 950px)"
          propWidth="150px"
          propWidth1="150px"
        />
        <PriceCard
          labelText="/rectangle-5@2x.png"
          pageTitle="BITSAT 2023"
          entityName="BITS Pilani"
          iconBookmarkImageUrl={`🦆 icon "bookmark"_17`}
          groupIconTextGroupIconIma="/fagroup.svg"
          priceRangeLabel="More than 15 Lakhs"
          componentImageUrl="/solarwalletbold.svg"
          textValue="₹ 2500"
          componentText="/oouinextltr.svg"
          propLeft="calc(50% + 330px)"
          propWidth="150px"
          propWidth1="150px"
        />
        <PriceCard
          labelText="/rectangle-5@2x.png"
          pageTitle="SSC CGL 2023"
          entityName="Staff Selection Commission"
          iconBookmarkImageUrl="/-icon-bookmark.svg"
          groupIconTextGroupIconIma="/fagroup.svg"
          priceRangeLabel="More than 10 Lakhs"
          componentImageUrl="/solarwalletbold.svg"
          textValue="₹ 1000"
          componentText="/oouinextltr.svg"
          propLeft="calc(50% - 630px)"
          propWidth="151px"
          propWidth1="151px"
        />
        <PriceCard
          labelText="/rectangle-5@2x.png"
          pageTitle="AUEET 2023"
          entityName="Andhra University"
          iconBookmarkImageUrl={`🦆 icon "bookmark"_27`}
          groupIconTextGroupIconIma="/fagroup.svg"
          priceRangeLabel="More than 10 Lakhs"
          componentImageUrl="/solarwalletbold.svg"
          textValue="₹ 1000"
          componentText="/oouinextltr.svg"
          propLeft="calc(50% + 650px)"
          propWidth="151px"
          propWidth1="151px"
        />
        <PriceCard
          labelText="/rectangle-5@2x.png"
          pageTitle="RBI Grade B 2023"
          entityName="Reserve Bank of India"
          iconBookmarkImageUrl={`🦆 icon "bookmark"_32`}
          groupIconTextGroupIconIma="/fagroup.svg"
          priceRangeLabel="More than 15 Lakhs"
          componentImageUrl="/solarwalletbold.svg"
          textValue="₹ 1600"
          componentText="/oouinextltr.svg"
          propLeft="calc(50% - 310px)"
          propWidth="150px"
          propWidth1="150px"
        />
        <PriceCard
          labelText="/rectangle-5@2x.png"
          pageTitle="GAT 2023"
          entityName="GITAM University"
          iconBookmarkImageUrl={`🦆 icon "bookmark"_37`}
          groupIconTextGroupIconIma="/fagroup.svg"
          priceRangeLabel="More than 10 Lakhs"
          componentImageUrl="/solarwalletbold.svg"
          textValue="₹ 2000"
          componentText="/oouinextltr.svg"
          propLeft="calc(50% + 970px)"
          propWidth="151px"
          propWidth1="151px"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
