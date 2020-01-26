import React from "react";

const Container = ({ children }) => (
  <div
    style={{
      backgroundColor: "#ffaabb",
      boxSizing: "border-box",
      overflow: "hidden",
      width: "100%"
    }}
  >
    {children}
  </div>
);

export default Container;
