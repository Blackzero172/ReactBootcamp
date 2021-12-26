import React, { useState } from "react";

const Exercise = ({ text, maxChars }) => {
  const [hidden, setHidden] = useState(true);
  if (hidden) {
    return (
      <p>
        {text.slice(0, maxChars)}...
        <button
          type="button"
          style={{ display: "block" }}
          onClick={() => setHidden(false)}
        >
          Show more
        </button>
      </p>
    );
  } else {
    return (
      <p>
        {text}
        <button
          type="button"
          style={{ display: "block" }}
          onClick={() => setHidden(true)}
        >
          Show less
        </button>
      </p>
    );
  }
};
export default Exercise;
