import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "#8860D0", border: "none", fontFamily: "'Raleway', sans-serif" }} className="btn btn-success">
    {props.children}
  </button>
);
