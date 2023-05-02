import React from "react";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import IconButton from "@mui/material/IconButton";

const ProfileUpdate = () => {
  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "rgba(226, 225, 225, 1)",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <IconButton
        color="primary"
        aria-lable="Profle Update"
        style={{ width: "80px", height: "80px" }}
      >
        <ManageAccountsTwoToneIcon
          style={{ color: "black", width: "60px", height: "60px" }}
        />
      </IconButton>
    </div>
  );
};

export default ProfileUpdate;
