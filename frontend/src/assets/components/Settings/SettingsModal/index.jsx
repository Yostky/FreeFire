import React, { useState } from "react";
import { Modal, InputComponent } from "@ui";
import axios from "axios";

const SettingsModal = ({
  isOpen,
  onClose,
  setUserData,
  header,
  inputLabel,
  updateKey,
  userData,
  id,
}) => {
  const [callbackVal, setCallbackVal] = useState(userData[updateKey]);

  const handleSubmit = async () => {
    if (callbackVal == userData[updateKey]) {
      onClose();
    }
    try {
      const updatedFieldData = { [updateKey]: callbackVal };
      await axios.put(`/api/v1/users/${id}`, { user: updatedFieldData });
      setUserData({ ...userData, [updateKey]: callbackVal });
      onClose();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
      header={header}
    >
      <InputComponent
        label={inputLabel}
        onChangeCallback={(e) => setCallbackVal(e)}
        initialValue={userData[updateKey]}
      />
    </Modal>
  );
};

export default SettingsModal;
