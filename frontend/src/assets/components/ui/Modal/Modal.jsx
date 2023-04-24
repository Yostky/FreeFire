import React, { useEffect, useState } from "react";
import "./Modal.css";
import { Button } from "@ui";
const Modal = ({ isOpen, onClose, children, handleSubmit, header }) => {
  const [render, setRender] = useState(isOpen);
  const [closing, setClosing] = useState(false);
  const [submitHandled, setSubmitHandled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      setClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
  };

  const submit = () => {
    setSubmitHandled(true);
    setClosing(true);
  };

  const handleTransitionEnd = () => {
    if (submitHandled) {
      setRender(false);
      handleSubmit();
      onClose();
    }
    if (closing) {
      setRender(false);
      onClose();
    }
  };

  if (!render) return null;

  return (
    <div
      className={`modal-overlay ${closing ? "closing" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={`modal ${closing ? "closing" : ""}`}>
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <h3>{header}</h3>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <div style={{ marginRight: "10px" }}>
            <Button dangerEmpty text={"Close"} onClick={handleClose} />
          </div>
          <Button blueEmpty text={"Submit"} onClick={submit} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
