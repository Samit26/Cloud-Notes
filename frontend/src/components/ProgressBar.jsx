// eslint-disable-next-line react/prop-types
const ProgressBar = ({ value }) => {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Danger example"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ height: "7px" }}
    >
      <div
        className="progress-bar bg-danger"
        style={{ width: `${value}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
