import React from "react";
import AppLayout from "../global/AppLayout";

interface ProfileProps {
  isMy: boolean;
}

const MyProfile = (props: ProfileProps) => {
  return (
    <AppLayout>
      <div style={{ color: "blue" }}>프로필페이지입니다.</div>
    </AppLayout>
  );
};

export default MyProfile;
