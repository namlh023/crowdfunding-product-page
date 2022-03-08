import React, { useState } from "react";

import "./assets/sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import ModalThankYou from "./components/ModalThankYou";
import ModalPledge from "./components/ModalPledge";

function App() {
  const TOTAL_BACKED = 100000;
  const DAYS_LEFT = 56;
  const [currentBacked, setCurrentBacked] = useState(89914);
  const [currentBacker, setCurrentBacker] = useState(5007);
  const [modalThankShow, setModalThankShow] = useState(false);
  const [modalPledgeShow, setModalPledgeShow] = useState(false);

  const pledges = [
    {
      name: "Bamboo Stand",
      minimum: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      rewardLeft: 101,
    },
    {
      name: "Black Edition Stand",
      minimum: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      rewardLeft: 64,
    },
    {
      name: "Mahogany Special Edition",
      minimum: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      rewardLeft: 0,
    },
  ];

  return (
    <div className="App">
      <Header></Header>
      <Hero setModalShow={setModalPledgeShow}></Hero>
      <Stats
        totalBacked={TOTAL_BACKED}
        currentBacked={currentBacked}
        daysLeft={DAYS_LEFT}
        currentBacker={currentBacker}
      ></Stats>
      <About pledges={pledges}></About>
      <ModalPledge
        show={modalPledgeShow}
        onHide={() => setModalPledgeShow(false)}
        onPledge={() => {
          setModalPledgeShow(false);
          setModalThankShow(true);
        }}
        pledges={pledges}
        setCurrentBacked={setCurrentBacked}
        setCurrentBacker={setCurrentBacker}
      />
      <ModalThankYou
        show={modalThankShow}
        onHide={() => setModalThankShow(false)}
      />
    </div>
  );
}

export default App;
