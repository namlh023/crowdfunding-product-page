import React, { useState, useEffect } from "react";
import { CURRENCY_USD, numberWithCommas } from "./utils";

export default function Stats({
  currentBacked,
  currentBacker,
  totalBacked,
  daysLeft,
}) {
  const [progressbar, setProgressbar] = useState(100);

  useEffect(() => {
    try {
      let progress =
        currentBacked >= totalBacked
          ? 100
          : (currentBacked / totalBacked) * 100;
      setProgressbar(+progress.toFixed(2));
    } catch {}
  }, [currentBacked, totalBacked]);

  return (
    <section className="stats">
      <ul>
        <li className="stat">
          <p className="stat-number">
            {numberWithCommas(currentBacked, CURRENCY_USD)}
          </p>
          <p className="p-like stat-des">
            of {numberWithCommas(totalBacked, CURRENCY_USD)} backed
          </p>
        </li>
        <li className="stat">
          <p className="stat-number">{numberWithCommas(currentBacker)}</p>
          <p className="p-like stat-des">total backers</p>
        </li>
        <li className="stat">
          <p className="stat-number">{numberWithCommas(daysLeft)}</p>
          <p className="p-like stat-des">days left</p>
        </li>
        <li className="progressbar">
          <div
            className="progressbar-inner"
            style={{ width: progressbar + "%" }}
          ></div>
        </li>
      </ul>
    </section>
  );
}
