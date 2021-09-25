import React from "react";

function Main({ categor }) {
  return (
    <div>
      <div>
        <img width={200} src={categor.img} />
        {categor.name}
      </div>
    </div>
  );
}
export default Main;
