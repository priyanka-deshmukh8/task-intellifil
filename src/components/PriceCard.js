import { useMemo } from "react";
import "./PriceCard.css";

const PriceCard = ({
  labelText,
  pageTitle,
  entityName,
  iconBookmarkImageUrl,
  groupIconTextGroupIconIma,
  priceRangeLabel,
  componentImageUrl,
  textValue,
  componentText,
  propLeft,
  propWidth,
  propWidth1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="rectangle-parent" style={groupDivStyle}>
      <div className="group-child" />
      <div className="line-parent">
        <div className="group-item" />
        <div className="rectangle-group">
          <img className="group-inner" alt="" src={labelText} />
          <div className="ap-eapcet-2023-container">
            <p className="ap-eapcet-2023">{pageTitle}</p>
            <p className="apsche">{entityName}</p>
          </div>
          <img className="icon-bookmark1" alt="" src={iconBookmarkImageUrl} />
        </div>
        <div className="group-parent" style={groupDiv1Style}>
          <div className="fagroup-parent" style={groupDiv2Style}>
            <img
              className="fagroup-icon1"
              alt=""
              src={groupIconTextGroupIconIma}
            />
            <div className="div">{priceRangeLabel}</div>
          </div>
          <div className="solarwallet-bold-parent">
            <img className="fagroup-icon1" alt="" src={componentImageUrl} />
            <div className="div">{textValue}</div>
          </div>
          <div className="frame-parent">
            <div className="engineering-wrapper">
              <div className="engineering">Engineering</div>
            </div>
            <div className="pcm-wrapper">
              <div className="engineering">PCM</div>
            </div>
          </div>
          <div className="view-details-parent">
            <div className="view-details">View details</div>
            <img className="oouinext-ltr-icon1" alt="" src={componentText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
