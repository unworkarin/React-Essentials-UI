import React from "react";
import "../styles/button.css";

export default function Button({ variant = "primary", children, ...props }) {
  return (
    <button className={`re-btn re-btn-${variant}`} {...props}>
      {children}
    </button>
  );
}
