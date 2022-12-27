import { useEffect, useState } from "react";

export default function ResponseTime() {
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);

  const radomDelay = Math.random() * 10 + 5;

  useEffect(() => {
    setTimeout(() => {
      setTime1(new Date().getTime());
    }, radomDelay * 1000);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "red",
        height: "500px",
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => time2 === 0 && setTime2(new Date().getTime())}
    >
      {time1 === 0 ? (
        <div
          style={{ backgroundColor: "blue", height: "100px", width: "100px" }}
        ></div>
      ) : (
        time2 !== 0 && <p>{(time2 - time1) / 1000 + " seconds"}</p>
      )}
    </div>
  );
}
