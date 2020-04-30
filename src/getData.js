import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import TimeStamp from "react-timestamp";

function GetUserData({ userId }) {
  const [timestamp, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("userData")
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimes(newTimes);
      });
    return () => unsubscribe();
  }, []);

  return timestamp;
}

const GetTimeData = ({ userId }) => {
  const timestamp = GetUserData({ userId });
  return (
    <div>
      {timestamp.map((time) => (
        <div key={time.id}>
          <p>
            {" "}
            Signed in:
            <TimeStamp
              date={time.timeStamp}
              options={{ includeDay: true, twentyFourHour: true }}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default GetTimeData;
