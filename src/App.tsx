import React from "react";
import UserList from "./myComponent/UserList";

function App() {
  return (
    <div className="absolute px-10 text-white bg-black left-1/3">
      <h1 className="py-5 text-2xl font-bold text-center">List of Users : </h1>
      <UserList />
    </div>
  );
}

export default App;
