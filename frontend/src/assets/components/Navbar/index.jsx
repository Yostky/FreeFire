import React, { useEffect } from "react";
import axios from "axios";

function Navbar() {
  console.log("hello");

  const grabUserData = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/users");
    console.log(res);
  };

  useEffect(() => {
    grabUserData();
  }, []);

  return <div>Navbar</div>;
}

export default Navbar;
