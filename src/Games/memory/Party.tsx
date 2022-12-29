import Button from "@mui/material/Button";
import React from "react";

export default function Party({ onChange }: any) {
  setTimeout(() => onChange(false), 1);
  return <Button onClick={() => onChange(false)}>continiue(1)</Button>;
}
