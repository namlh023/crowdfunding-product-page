import React, { useState } from "react";
import { isInteger } from "../utils";

export default function Pledge({
  name,
  minimum,
  description,
  rewardLeft,
  handlePledgeActive,
  setCurrentBacked,
  setCurrentBacker,
  onPledge,
}) {
  const [inputValue, setInputValue] = useState("");
  const rewardOutOfStock = Number(rewardLeft) <= 0;

  function onHandleIntegerChange(setState, value) {
    if (isInteger(value)) {
      setState(value);
    }
  }

  function onSubmit(e, value) {
    e.preventDefault();

    if (isInteger(value)) {
      setCurrentBacker((prevBacker) => Number(prevBacker) + 1);
      setCurrentBacked((prevBacked) => Number(prevBacked) + Number(value));
    }

    onPledge();
  }

  return (
    <div
      onClick={handlePledgeActive}
      className={`pledge pledge-modal ${rewardOutOfStock ? "disabled" : ""}`}
    >
      <h3 className="h3-like pledge-name">{name}</h3>
      <span className="h3-like minimum-required">
        Pledge ${minimum} or more
      </span>
      <p className="p-like">{description}</p>
      <div className="reward-left">
        <span>{rewardLeft}</span>
        <p className="p-like">left</p>
      </div>
      <form className="pledge-form" onSubmit={(e) => onSubmit(e, inputValue)}>
        <label for="pledge-input">Enter your pledge</label>
        <div className="pledge-input-wrapper">
          <input
            type="number"
            id="pledge-input"
            value={inputValue}
            onChange={(event) =>
              onHandleIntegerChange(setInputValue, event.target.value)
            }
          />
        </div>
        <button
          type="submit"
          className="button button-active button-text button-text-small"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
