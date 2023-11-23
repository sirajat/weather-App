import React, { useState, useEffect } from "react";
import "../Banner/banner.css";
import Card from "./card";
import Weather from "../Weather_Section/weather";

function Banner() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDateTime = dateTime.toLocaleDateString("en-US", options);

  return (
    <div className="banner-image">
      <div className="top">{formattedDateTime}</div>
      <div className="banner-bottom">
      <Card/>
      </div>
      <div className="bottom">
        <Weather/>
      </div>
    </div>
  );
}

export default Banner;