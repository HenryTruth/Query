import React from "react";
import { Link } from "react-router-dom";
import "./CurrentPageIdentifier.scss";

export default function CurrentPageIdentifier({ children, useThisStyle, to }) {
  return (
    <div className="CurrentPageIdentifier">
      <Link to={to} style={useThisStyle}>
        {children}
      </Link>
    </div>
  );
}
