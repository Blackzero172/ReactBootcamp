import React, { useState } from "react";
import CustomInput from "./CustomInput/CustomInput.components";
const Exercise = () => {
  const [time, updateTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const setTime = (e) => {
    if (e.target.name === "seconds") {
      updateTime({
        seconds: e.target.value,
        minutes: +e.target.value / 60,
        hours: +e.target.value / 3600,
      });
    } else if (e.target.name === "minutes") {
      updateTime({
        seconds: e.target.value * 60,
        minutes: +e.target.value,
        hours: +e.target.value / 60,
      });
    } else if (e.target.name === "hours") {
      updateTime({
        seconds: e.target.value * 3600,
        minutes: +e.target.value * 60,
        hours: +e.target.value,
      });
    }
  };
  return (
    <div>
      <CustomInput label="seconds" onInput={setTime} value={time.seconds} />
      <CustomInput label="minutes" onInput={setTime} value={time.minutes} />
      <CustomInput label="hours" onInput={setTime} value={time.hours} />
    </div>
  );
};
export default Exercise;
