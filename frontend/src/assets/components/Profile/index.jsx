import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: null,
    biography: null,
    email: null,
  });
  const [editedData, setEditedData] = useState({
    name: "",
    biography: "",
    email: "",
  });
  const [editMode, setEditMode] = useState({
    name: false,
    biography: false,
    email: false,
  });

  useEffect(() => {
    grabProfileData();
  }, []);

  const grabProfileData = async () => {
    const res = await axios.get(`/api/v1/users/${id}`);
    const { biography, email, name } = res.data;
    setUserData({ biography, email, name });
  };

  const handleEditMode = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
    setEditedData({ ...editedData, [field]: userData[field] });
  };

  const handleChange = (field, value) => {
    setEditedData({ ...editedData, [field]: value });
  };

  const updateUserData = async (field) => {
    if (editedData[field] !== userData[field]) {
      try {
        const updatedFieldData = { [field]: editedData[field] };
        await axios.put(`/api/v1/users/${id}`, { user: updatedFieldData });
        setUserData({ ...userData, [field]: editedData[field] });
        console.log("data set");
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }
    setEditMode({ ...editMode, [field]: false });
  };

  return (
    <div className="profile">
      <div className="card profile-header">
        <img
          className="profile-picture"
          src="https://via.placeholder.com/200"
          alt="Profile"
        />
        <div className="profile-info">
          {editMode.name ? (
            <div>
              <input
                type="text"
                value={editedData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <FaPencilAlt
                className="edit-icon"
                onClick={() => updateUserData("name")}
              />
            </div>
          ) : (
            <h2>
              {userData.name}
              <FaPencilAlt
                className="edit-icon"
                onClick={() => handleEditMode("name")}
              />
            </h2>
          )}
          {editMode.email ? (
            <div>
              <input
                type="email"
                value={editedData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <FaPencilAlt
                className="edit-icon"
                onClick={() => updateUserData("email")}
              />
            </div>
          ) : (
            <p className="profile-city">
              {userData.email}
              <FaPencilAlt
                className="edit-icon"
                onClick={() => handleEditMode("email")}
              />
            </p>
          )}
          {editMode.biography ? (
            <div>
              <input
                type="text"
                value={editedData.biography}
                onChange={(e) => handleChange("biography", e.target.value)}
              />
              <FaPencilAlt
                className="edit-icon"
                onClick={() => updateUserData("biography")}
              />
            </div>
          ) : (
            <p className="profile-biography">
              {userData.biography}
              <FaPencilAlt
                className="edit-icon"
                onClick={() => handleEditMode("biography")}
              />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
