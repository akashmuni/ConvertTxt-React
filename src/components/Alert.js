import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  let alertSpace = {
    width: "290px",
    fontSize: "14px",
  };
  return (
    <div style={alertSpace}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show alertPosition`}
          role="alert"
        >
          <strong>{capitalize(props.alert.warningmsg)}</strong>{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
