import type { ReactNode } from "react";
import { Button, Box, type SxProps, type Theme } from "@mui/material";
import { white } from "./Colors";

type ImagePosition = "left" | "right";

interface ImageButtonProps {
  text?: string;

  // Use either an icon OR an image
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;

  // Icon / image position
  position?: ImagePosition;

  // Image sizing
  imageWidth?: string | number;
  imageHeight?: string | number;

  // Button actions
  onClick?: () => void;
  disabled?: boolean;

  // Button styling
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  fontSize?: string | number;
  fontWeight?: string | number;
  gap?: string | number;
  hoverColor?: string;
  shadow?: string;

  // MUI custom styles
  sx?: SxProps<Theme>;
}

export default function ImageButton({
  text = "Click Me",
  icon,
  image,
  imageAlt = "button image",
  position = "left",
  imageWidth = "20px",
  imageHeight = "20px",
  onClick,
  disabled = false,
  bgColor = "transparent",
  textColor = white,
  borderColor = "transparent",
  height = "40px",
  width = "100%",
  borderRadius = "4px",
  fontSize = "16px",
  fontWeight = 600,
  gap = "8px",
  hoverColor,
  shadow = "none",
  sx = {},
}: ImageButtonProps) {
  // Image
  const imageElement = image ? (
    <Box
      component="img"
      src={image}
      alt={imageAlt}
      sx={{
        width: imageWidth,
        height: imageHeight,
        objectFit: "contain",
        flexShrink: 0,
        display: "block",
      }}
    />
  ) : null;

  // Icon takes priority if both icon and image are provided
  const mediaElement = icon ? (
    <Box
      component="span"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        "& svg": {
          display: "block",
        },
      }}
    >
      {icon}
    </Box>
  ) : (
    imageElement
  );
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        height,
        width,
        borderRadius,
        border: `1px solid ${borderColor}`,
        fontSize,
        fontWeight,
        textTransform: "none",
        boxShadow: shadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap,
        "&:hover": {
          backgroundColor: hoverColor || bgColor,
          boxShadow: shadow,
        },
        ...sx,
      }}
    >
      {position === "left" && mediaElement}
      {text && <span>{text}</span>}
      {position === "right" && mediaElement}
    </Button>
  );
}
