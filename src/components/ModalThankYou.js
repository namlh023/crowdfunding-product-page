import Modal from "react-bootstrap/Modal";
import iconCheck from "../assets/images/icon-check.svg";

export default function ModalThankYou(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-thankyou"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={iconCheck} alt="" aria-hidden="true" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className="h2-like">Thank you for your support!</h2>
          <p className="p-like">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="button button-text button-active button-text-medium"
            onClick={props.onHide}
          >
            Got it!
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
