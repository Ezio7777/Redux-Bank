import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "../styles/Home.css";
import Bell from "../components/Bell";
import Count from "../components/Count";

function Home() {
  return (
    <>
      <div className="home">
        <Bell />
        <Count />
      </div>
    </>
  );
}

export default Home;
