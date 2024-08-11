import { Outlet } from "react-router-dom";
// import Container2 from "./Cointainer2";

const Container = () => {
  return (
    <div style={{ backgroundColor: "#F4EEFF", minHeight: "680px" }}>
      {/* <Container2 />; */}
      <Outlet />
    </div>
  );
};

export default Container;
