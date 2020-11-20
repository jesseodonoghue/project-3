import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "#8860D0", border: "none" }} className="btn btn-success">
    {props.children}
  </button>
);
