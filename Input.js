import React from "react";
import "../styles/input.css";

export default function Input({ label, error, ...props }) {
  return (
    <label className="re-input-label">
      {label && <div className="re-input-label-text">{label}</div>}
      <input className={`re-input ${error ? 're-input-error' : ''}`} {...props} />
      {error && <div className="re-input-error-text">{error}</div>}
    </label>
  );
}
