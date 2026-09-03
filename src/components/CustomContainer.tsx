import { Paper } from "@mui/material";
import type { PaperProps } from "@mui/material";
import type { SystemStyleObject, Theme } from "@mui/system";
import type { ReactNode } from "react";

import { background, black } from "./Colors";

interface CustomContainerProps extends Omit<PaperProps, "children" | "sx"> {
  children?: ReactNode;
  bgcolor?: string;
  padding?: string | number;
  shadow?: string;
  borderColor?: string;
  borderRadius?: string | number;
  height?: string | number;
  width?: string | number;
  display?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  sx?: SystemStyleObject<Theme>;
}

export default function CustomContainer({
  children,
  bgcolor = background,
  padding = "14px 24px 10px 24px",
  shadow = "none",
  borderColor = black,
  borderRadius = "12px",
  height = "100%",
  width = "100%",
  display = "flex",
  flexDirection = "column",
  sx = {},
  ...props
}: CustomContainerProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        padding,
        backgroundColor: bgcolor,
        width,
        height,
        borderRadius,
        border: `1px solid ${borderColor}`,
        boxShadow: shadow,
        display,
        flexDirection,
        boxSizing: "border-box",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
}
