import React from "react";

export const Card = (props) => (
  <div className="card" style={{ maxHeight: 770, backgroundColor: '#f8f9f8'}}>
    <div className="card-body">
      {props.children}
    </div>
  </div>
);
