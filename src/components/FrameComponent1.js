import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  icbaselineApple,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className="icbaseline-apple-parent" style={frameDiv1Style}>
      <img className="icbaseline-apple-icon" alt="" src={icbaselineApple} />
      <div className="download-on-the-container1">
        <p className="download-on-the1">Download on the</p>
        <p className="app-store">App Store</p>
      </div>
    </div>
  );
};

export default FrameComponent1;
