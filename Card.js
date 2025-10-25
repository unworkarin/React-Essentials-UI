import React from "react";
import "../styles/card.css";

export default function Card({ title, footer, children, style }) {
  return (
    <div className="re-card" style={style}>
      {title && <div className="re-card-header">{title}</div>}
      <div className="re-card-body">{children}</div>
      {footer && <div className="re-card-footer">{footer}</div>}
    </div>
  );
}
