// eslint-disable-next-line react/prop-types
const EmptyItem = ({ handleCreateNoteBtn }) => {
  const handleCreateNoteBtn1 = () => {
    handleCreateNoteBtn();
  };
  return (
    <div
      className="container items-container my-3 fs-5 d-flex align-items-center"
      style={{
        backgroundColor: "#E3FDFD",
        minHeight: "100px",
        fontWeight: "700",
      }}
    >
      <div className="container d-flex flex-column align-self-center">
        <span
          className="form-check-label d-flex justify-content-center pb-2"
          htmlFor="flexCheckDefault"
        >
          Create Your First Note
        </span>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => handleCreateNoteBtn1()}
          >
            Create !
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyItem;
