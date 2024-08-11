import "../components/items.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { DataContext } from "../Context/store";
const Items = ({ note }) => {
  console.log(note);
  const { deleteNotes } = useContext(DataContext);
  const date = new Date(note.date);
  const formattedDate = date.toLocaleDateString("en-GB");
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div
      className="container items-container my-3 fs-5"
      style={{ backgroundColor: "#DCD6F7" }}
    >
      <div className="form-check ">
        <input
          className="form-check-input "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <div className="d-flex">
          <div className="container ">
            <span className="form-check-label" htmlFor="flexCheckDefault">
              {note.title}
            </span>
            <div className="container span-time px-0">
              <span>{formattedTime},</span>
              <span className="mx-1">{formattedDate}</span>
            </div>
          </div>
          <div className="container d-flex justify-content-end align-items-center fs-3">
            <MdDelete onClick={() => deleteNotes(note._id)} />
            <MdEdit style={{ marginLeft: "0.8rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

Items.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default Items;
