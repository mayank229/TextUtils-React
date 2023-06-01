// import { useState } from 'react';

function Alert(props) {

  const capitalize = (messageType) => {
    return messageType.charAt(0).toUpperCase() + messageType.slice(1);
  }

  return (

    <div style={{ height: "50px" }}>
      {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.message}
      </div>}
    </div>
  );
}

export default Alert;
