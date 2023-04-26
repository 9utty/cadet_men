import React from "react";
import AppLayout from "../global/AppLayout";

interface ProfileProps {
  isMy: boolean;
}

const Profile = (props: ProfileProps) => {
  return (
    <AppLayout>
      <div>프로필페이지입니다.</div>
    </AppLayout>
  );
};

export default Profile;
