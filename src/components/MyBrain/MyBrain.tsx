import { useState } from "react";
import StatusBar from "../StatusBar/StatusBar";

export default function MyBrain() {
  const [heightTop, setHeightTop] = useState(50);
  const [heightBottom, setHeightBottom] = useState(50);

  return (
    <div>
      <div
        style={{
          height: "5%",
          width: "100%",
          position: "fixed",
          top: "0px",
        }}
      >
        <StatusBar />
      </div>
      <button
        style={{
          height: heightTop + "vh",
          width: "100vw",
          backgroundColor: "red",
        }}
        onClick={() => {
          setHeightTop(heightTop + 5);
          setHeightBottom(heightBottom - 5);
        }}
      />
      <button
        style={{
          height: heightBottom + "vh",
          width: "100vw",
          backgroundColor: "blue",
        }}
        onClick={() => {
          setHeightTop(heightTop - 5);
          setHeightBottom(heightBottom + 5);
        }}
      />
    </div>
  );
}
