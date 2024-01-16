import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="ads">
      <div className="ads-child" />
      <div className="group-parent3">
        <div className="gate-results-parent">
          <b className="gate-results">
            <p className="gate1">GATE</p>
            <p className="results">RESULTS</p>
          </b>
          <div className="line-container">
            <div className="group-child1" />
            <div className="wrapper">
              <div className="div2">2022</div>
            </div>
          </div>
        </div>
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <div className="group-parent4">
        <div className="rectangle-parent1">
          <div className="group-child2" />
          <img
            className="expand-arrow-icon1"
            alt=""
            src="/expand-arrow@2x.png"
          />
        </div>
        <img className="group-icon" alt="" src="/group-381@2x.png" />
      </div>
    </div>
  );
};

export default FormContainer;
