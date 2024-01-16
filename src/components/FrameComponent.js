import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  bxlplayStore,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className="bxlplay-store-parent" style={frameDivStyle}>
      <img className="bxlplay-store-icon" alt="" src={bxlplayStore} />
      <div className="download-on-the-container">
        <p className="download-on-the">Download on the</p>
        <p className="play-store">Play Store</p>
      </div>
    </div>
  );
};

export default FrameComponent;
