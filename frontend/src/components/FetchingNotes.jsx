const FetchingNotes = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center items-container my-3 fs-5"
      style={{
        backgroundColor: "white",
        minHeight: "100px",
        fontWeight: "700",
      }}
    >
      {/* <ProgressBar /> */}
      <div className="d-flex justify-content-center pb-3">
        Fetching notes...
      </div>

      <div className="spinner-border align-self-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default FetchingNotes;
