import React, { useState, useEffect, useRef } from "react";
import styles from "./Settings.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import SettingsModal from "./SettingsModal";
import { Button } from "@ui";
import ColorDots from "./AnimatedBanners/ColorDots";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: null,
    biography: null,
    email: null,
  });
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const isFirstRender = useRef(true);

  const modalArray = [
    {
      header: "Update Your Name",
      inputLabel: "Name",
      updateKey: "name",
    },
    {
      header: "Update Your Email",
      inputLabel: "Email",
      updateKey: "email",
    },
  ];

  useEffect(() => {
    if (!modalData || isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setOpenModal(true);
  }, [modalData]);

  useEffect(() => {
    grabSettingsData();
  }, []);

  const grabSettingsData = async () => {
    const res = await axios.get(`/api/v1/users/${id}`);
    const { biography, email, name } = res.data;
    setUserData({ biography, email, name });
  };

  return (
    <div className={styles.settings}>
      <div>
        <ColorDots />
      </div>
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.row}>
            <div className={styles.labelArea}>
              <label>Username</label>
              <p>{userData.name}</p>
            </div>
            <Button
              blueEmpty
              text="Edit"
              onClick={() => setModalData(modalArray[0])}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.labelArea}>
              <label>Email</label>
              <p>{userData.email}</p>
            </div>
            <Button
              blueEmpty
              text="Edit"
              onClick={() => setModalData(modalArray[1])}
            />
          </div>
        </div>
      </div>
      <br></br>
      <div
        className={styles.card}
        style={{ height: "50px", paddingTop: "15px" }}
      >
        <Button
          dangerEmpty
          text="Logout"
          onClick={() => {
            localStorage.removeItem("jwt");
            navigate(`/login`);
          }}
        />
      </div>
      {openModal && (
        <SettingsModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          setUserData={setUserData}
          header={modalData.header}
          inputLabel={modalData.inputLabel}
          updateKey={modalData.updateKey}
          userData={userData}
          id={id}
        />
      )}
    </div>
  );
};

export default Settings;
