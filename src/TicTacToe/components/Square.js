import React from "react";

function Square(props) {
  let { value, onClick } = props;

  const style = value ? `squares ${value}` : `squares`;

  return (
    <>
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </>
  );
}

export default Square;
