import React from "react"
import { Button as MUIButton } from "@mui/material"

export default function Button({ children, variant }) {
  return <MUIButton variant={variant}>{children}</MUIButton>
}
