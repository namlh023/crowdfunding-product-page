import React, { useState, useEffect } from "react";
import iconBookmark from "../assets/images/icon-bookmark.svg";

export default function Hero({ setModalShow }) {
  const [bookmarkActive, setBookmarkActive] = useState(false);

  function handleBookmarkClick() {
    localStorage.setItem("bookmark", !bookmarkActive);
    setBookmarkActive(!bookmarkActive);
  }

  useEffect(() => {
    if (localStorage.getItem("bookmark") === "true") {
      setBookmarkActive(true);
    }
  }, []);

  return (
    <section className="hero">
      <h1 className="h1-like h1-hero">Mastercraft Bamboo Monitor Riser</h1>
      <p className="p-like p-hero">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="hero-cta">
        <button
          className="button button-active button-text button-text-large"
          onClick={() => setModalShow(true)}
        >
          Back this project
        </button>
        <div
          className={`bookmark button-text button-text-large ${
            bookmarkActive ? "bookmark-active" : ""
          }`}
          onClick={handleBookmarkClick}
        >
          <img src={iconBookmark} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
