import PriceCard from "./PriceCard";
import "./RecentExamsContainer.css";

const RecentExamsContainer = () => {
  return (
    <div className="recent-exams">
      <div className="recent-exams-parent">
        <b className="recent-exams1">Recent exams</b>
        <b className="see-all1">See All</b>
      </div>
      <div className="recent-exams-inner">
        <div className="group-frame">
          <div className="group-frame">
            <div className="hitsee-wrapper">
              <div className="hitsee">HITSEE</div>
            </div>
            <div className="iat-iiser-wrapper">
              <div className="hitsee">IAT IISER</div>
            </div>
            <div className="geee-wrapper">
              <div className="hitsee">GEEE</div>
            </div>
            <div className="cieat-wrapper">
              <div className="hitsee">CIEAT</div>
            </div>
            <div className="amity-jee-wrapper">
              <div className="hitsee">Amity JEE</div>
            </div>
            <div className="beee-wrapper">
              <div className="hitsee">BEEE</div>
            </div>
            <div className="gate-wrapper">
              <div className="hitsee">GATE</div>
            </div>
            <div className="ap-eapcet-wrapper">
              <div className="hitsee">AP EAPCET</div>
            </div>
            <div className="bitsat-wrapper">
              <div className="hitsee">BITSAT</div>
            </div>
            <div className="jee-mains-wrapper">
              <div className="hitsee">JEE Mains</div>
            </div>
            <div className="jee-advanced-wrapper">
              <div className="hitsee">JEE Advanced</div>
            </div>
            <div className="ts-eamcet-wrapper">
              <div className="hitsee">TS EAMCET</div>
            </div>
            <div className="ts-eamcet-container">
              <div className="hitsee">TS EAMCET</div>
            </div>
            <div className="all-wrapper">
              <div className="hitsee">All</div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-exams-child">
        <div className="frame-div">
          <div className="group-parent2">
            <PriceCard
              labelText="/rectangle-5@2x.png"
              pageTitle="VITEEE 2023"
              entityName="Vellore Institute of Technology"
              iconBookmarkImageUrl="/-icon-bookmark.svg"
              groupIconTextGroupIconIma="/fagroup.svg"
              priceRangeLabel="More than 10 Lakhs"
              componentImageUrl="/solarwalletbold.svg"
              textValue="₹ 1500"
              componentText="/oouinextltr.svg"
              propLeft="calc(50% - 1270px)"
              propWidth="151px"
              propWidth1="151px"
            />
            <PriceCard
              labelText="/rectangle-5@2x.png"
              pageTitle="AP EAPCET 2023"
              entityName="APSCHE"
              iconBookmarkImageUrl={`🦆 icon "bookmark"_47`}
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
              pageTitle="SRMJEE 2023"
              entityName="SRMIST"
              iconBookmarkImageUrl="/-icon-bookmark.svg"
              groupIconTextGroupIconIma="/fagroup.svg"
              priceRangeLabel="More than 10 Lakhs"
              componentImageUrl="/solarwalletbold.svg"
              textValue="₹ 1000"
              componentText="/oouinextltr.svg"
              propLeft="calc(50% - 950px)"
              propWidth="151px"
              propWidth1="151px"
            />
            <PriceCard
              labelText="/rectangle-5@2x.png"
              pageTitle="BITSAT 2023"
              entityName="BITS Pilani"
              iconBookmarkImageUrl={`🦆 icon "bookmark"_57`}
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
              pageTitle="TS EAMCT 2023"
              entityName="TSCHE"
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
              iconBookmarkImageUrl={`🦆 icon "bookmark"_67`}
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
              pageTitle="BEEE 2023"
              entityName="Bharat University"
              iconBookmarkImageUrl={`🦆 icon "bookmark"_72`}
              groupIconTextGroupIconIma="/fagroup.svg"
              priceRangeLabel="More than 5 Lakhs"
              componentImageUrl="/solarwalletbold.svg"
              textValue="₹ 1600"
              componentText="/oouinextltr.svg"
              propLeft="calc(50% - 310px)"
              propWidth="146px"
              propWidth1="146px"
            />
            <PriceCard
              labelText="/rectangle-5@2x.png"
              pageTitle="GAT 2023"
              entityName="GITAM University"
              iconBookmarkImageUrl={`🦆 icon "bookmark"_77`}
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
      </div>
    </div>
  );
};

export default RecentExamsContainer;
