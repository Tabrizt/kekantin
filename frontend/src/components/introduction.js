import React from "react";

function Introduction(props) {
  console.log("Parameter Kiriman :", props.nama);

  return (
    <div>
      <h1>Introduction</h1>
      <p>Halo nama saya : {props.nama}</p>
    </div>
  );
}

export default Introduction;
