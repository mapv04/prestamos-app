import React from "react";
import "../styles/tailwind-styles.css";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import HowTo from "../components/HowTo";
import Advantages from "../components/Advantages";

class Landing extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 ">
        <Navbar />
        <Introduction />
        <HowTo />
        <Advantages />
      </div>
    );
  }
}

export default Landing;
