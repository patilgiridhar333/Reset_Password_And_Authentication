import React from "react";

export default function FormBody({ children }) {
  return (
    <div className="form-containerr">
      <form action="/">{children}</form>
    </div>
  );
}
