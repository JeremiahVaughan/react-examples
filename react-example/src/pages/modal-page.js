import Modal from "../components/model/modal";
import Button from "../components/button/button";
import {useState} from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose}>I Address</Button>
    </div>
  );
  const modal = <Modal
    onClose={handleClose}
    actionBar={actionBar}
  >
    <p>
      Here is some thing you need to address right meow
      I like some ffods that eunhoe nuhoetnuoe ueont \n
    </p>
  </Modal>
  return (
    <div>
      <Button onClick={handleClick}>Open Modal</Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage;
