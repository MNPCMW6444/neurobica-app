import Button from "@mui/material/Button";
import React from "react";

export default function Party({ onChange }: any) {
  return <Button onClick={() => onChange(false)}>continiue</Button>;
}
