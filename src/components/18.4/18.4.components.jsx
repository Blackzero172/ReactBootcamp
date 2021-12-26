import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox.components";
const Exercise = () => {
  const [list, updateList] = useState([
    {
      name: "one",
      checked: false,
      id: 0,
      hidden: false,
    },
    {
      name: "two",
      checked: false,
      id: 1,
      hidden: false,
    },
    {
      name: "three",
      checked: false,
      id: 2,
      hidden: false,
    },
    {
      name: "four",
      checked: false,
      id: 3,
      hidden: false,
    },
    {
      name: "five",
      checked: false,
      id: 4,
      hidden: false,
    },
  ]);
  const checkUncheck = (e) => {
    const listCopy = [...list];
    const itemToModify = listCopy[e.target.id];
    itemToModify.checked = !itemToModify.checked;
    updateList(listCopy);
  };
  const deleteItems = () => {
    const listCopy = [...list];
    listCopy.forEach((item) => {
      item.checked ? (item.hidden = true) : (item.hidden = false);
    });
    updateList(listCopy);
  };
  const resetItems = () => {
    const listCopy = [...list];
    listCopy.forEach((item) => {
      item.checked = false;
      item.hidden = false;
    });
    updateList(listCopy);
  };
  return (
    <div>
      <button type="button" onClick={deleteItems}>
        Delete
      </button>
      <button type="button" onClick={resetItems}>
        Reset
      </button>
      <ul>
        {list.map((listItem) => {
          return (
            <CustomCheckbox
              text={listItem.name}
              checked={listItem.checked}
              onChange={checkUncheck}
              id={listItem.id}
              hidden={listItem.hidden}
              key={listItem.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Exercise;
