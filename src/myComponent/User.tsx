import React from "react";

interface Props {
  gender?: string;
  email?: string;
}

const User: React.FC<Props> = (props) => {
  return (
    <div className="flex space-x-10">
      <p className="w-40">Gender : {props.gender}</p>
      <p>Email : {props.email}</p>
    </div>
  );
};

User.defaultProps = {
  gender: "unknown",
  email: "unknown",
};

export default User;
