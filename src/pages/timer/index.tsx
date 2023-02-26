import React, { useState, useEffect } from "react";

const Timer = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <p>
        {date.toLocaleDateString("fa-IR", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </p>
      <p>
        {date.toLocaleString("fa-IR", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </p>
    </div>
  );
};

export default Timer;
