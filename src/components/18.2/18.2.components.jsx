import React, { useState } from "react";

const Exercise = () => {
  const [data, updateData] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  const changeItemState = (e) => {
    const dataCopy = [...data];
    const itemToChange = dataCopy.find((item) => item.name === e.target.id);
    itemToChange.completed = !itemToChange.completed;
    updateData(dataCopy);
  };
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <p
              style={
                item.completed
                  ? { display: "inline-block", textDecoration: "line-through" }
                  : { display: "inline-block" }
              }
            >
              {item.name}
            </p>
            <button type="button" id={item.name} onClick={changeItemState}>
              {item.completed ? <>&#10003;</> : <>&#88;</>}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Exercise;
