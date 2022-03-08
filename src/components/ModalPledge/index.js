import Modal from "react-bootstrap/Modal";
import Pledge from "./Pledge";

export default function ModalPledge(props) {
  function handlePledgeActive(event) {
    let active = document.querySelectorAll(".pledge-modal.active");
    for (let elem of active) {
      elem.classList.remove("active");
    }
    handlePledgeFormActive();

    event.target.closest(".pledge-modal").classList.add("active");
    event.target
      .closest(".pledge-modal")
      .querySelector(".pledge-form").hidden = false;
  }

  function handlePledgeFormActive() {
    let pledgeForm = document.querySelectorAll(".pledge-form");
    for (let pf of pledgeForm) {
      pf.hidden = true;
    }
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-pledge"
        onEnter={handlePledgeFormActive}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Back this project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="p-like">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="pledges">
            {props.pledges.map((pledge, index) => {
              return (
                <Pledge
                  key={index}
                  name={pledge.name}
                  minimum={pledge.minimum}
                  description={pledge.description}
                  rewardLeft={pledge.rewardLeft}
                  handlePledgeActive={(event) => handlePledgeActive(event)}
                  setCurrentBacked={props.setCurrentBacked}
                  setCurrentBacker={props.setCurrentBacker}
                  onPledge={props.onPledge}
                />
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
