// R_24_useContext.js
import React, { useContext } from "react";
import UserContext from "./R_24_creContext";// correct import

export default function R_24_useContext() {
  const username = useContext(UserContext); // context se value le rahe

  return <h2>Welcome, {username}!</h2>;
}


// 🧠 Ye default value kab use hoti hai?
// 👉 Sirf tab jab aap UserContext.Provider ka use nahin karte ho.