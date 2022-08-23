import { useState } from "react";

export default function Server() {
  const [res, setRes] = useState<string>(
  ("Checking if server is avaliable...");
  return <div>{res}</div>;
}
