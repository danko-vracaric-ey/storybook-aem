import React, { useState } from "react";
import { Primary as Button } from "../../Button/Button.stories";
import { Opened as Modal } from "../../Modal/Modal.stories";

export default {
  title: "Pages/CallModal",
};

export const Default = ({
  modalHeading,
  modalContent,
  modalButnOneTxt,
  modalButnTwoTxt,
  onCancelModal,
  onConfirmModal,
  btnLabel,
  onBtnClick,
}) => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((open) => !open);
  };

  console.log(Modal);

  return (
    <>
      {open ? (
        <Modal
          modalHeading={modalHeading}
          modalContent={modalContent}
          buttonOneText={modalButnOneTxt}
          buttonTwoText={modalButnTwoTxt}
          onCancel={toggleModal}
          onConfirm={toggleModal}
        />
      ) : null}
      <Button label={btnLabel} onClick={toggleModal} />
    </>
  );
};

Default.args = {
  modalHeading: "Modal heading",
  modalContent: "Some modal content",
  modalButnOneTxt: "Cancel",
  modalButnTwoTxt: "Confirm",
  btnLabel: "Open modal",
};
