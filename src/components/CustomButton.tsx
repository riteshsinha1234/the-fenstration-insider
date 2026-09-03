import { Button } from "@mui/material";
import type { SystemStyleObject, Theme } from "@mui/system";
import type { ReactNode } from "react";

interface CustomButtonProps {
  text?: string;
  icon?: ReactNode;

  iconSize?: string | number;
  iconSx?: SystemStyleObject<Theme>;

  bgColor?: string;
  textColor?: string;
  borderColor?: string;

  onClick?: () => void;

  height?: string | number;
  width?: string | number;

  borderRadius?: string | number;

  fontSize?: string | number;
  fontWeight?: string | number;

  hoverColor?: string;

  mb?: string | number;

  shadow?: string;

  disabled?: boolean;

  type?: "button" | "submit" | "reset";

  sx?: SystemStyleObject<Theme>;
}

export default function CustomButton({
  text = "Click Me",

  icon = null,

  iconSize = "18px",
  iconSx = {},

  bgColor = "#1976d2",
  textColor = "#fff",
  borderColor = "transparent",

  onClick,

  height = "40px",
  width = "100%",

  borderRadius = "4px",

  fontSize = "16px",
  fontWeight = 600,

  hoverColor,

  mb = "0px",

  shadow = "none",

  disabled = false,

  type = "button",

  sx = {},
}: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
      type={type}
      sx={{
        backgroundColor: bgColor,
        color: textColor,

        fontSize,
        fontWeight,

        textTransform: "none",

        mb,

        borderRadius,

        height,
        width,

        border: `1px solid ${borderColor}`,

        boxShadow: shadow,

        "&:hover": {
          backgroundColor: hoverColor || bgColor,
          boxShadow: shadow,
        },

        "& .MuiButton-startIcon svg": {
          fontSize: iconSize,
          ...iconSx,
        },

        ...sx,
      }}
    >
      {text}
    </Button>
  );
}
