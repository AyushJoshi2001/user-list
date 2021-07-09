import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import User from "./User";

interface Props {}

const UserList: React.FC<Props> = (props) => {
  const [userData, setUserData] = useState<any>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api?inc=id,name,gender,email&page=" +
          page +
          "&results=20"
      )
      .then((response) => {
        setUserData(response.data.results);
      });
  }, [page]);

  return (
    <div className="flex flex-col">
      <div className="space-y-1">
        {userData.map((u: any) => (
          <User gender={u.gender} email={u.email} />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="px-4 py-1 my-10 text-white bg-red-400 rounded hover:bg-red-600"
          onClick={() => setPage(page + 1)}
        >
          Next-{page}
        </button>
      </div>
    </div>
  );
};

UserList.defaultProps = {};

export default UserList;
