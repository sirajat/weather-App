import React, { useState, useEffect } from "react";
import "../Banner/banner.css";

function Banner() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
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
    </div>
  );
}

export default Banner;
