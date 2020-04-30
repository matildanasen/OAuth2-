import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import TimeStamp from "react-timestamp";

const AddData = ({ userId, userEmail }) => {
  const timeStamp = Math.floor(new Date().getTime() / 1000);

  console.log("timestamp", timeStamp);

  firebase.firestore().collection("userData").doc(userId).set({
    id: userId,
    timestamp: timeStamp,
    email: userEmail,
  });
  console.log("adds data with addData");

  return <div></div>;
};

export default AddData;
