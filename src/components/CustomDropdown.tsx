"use client";

import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

import {
  Primary,
  Secondary,
  inputBackground,
  borderColor,
  cardBackground,
  txtWhite,
  txtMuted,
} from "./Colors";

interface DropdownOption {
  label: string;
  value: string | number;
}

interface CustomDropdownProps {
  label?: string;
  value?: string | number;
  onChange?: (event: SelectChangeEvent<string | number>) => void;
  options?: DropdownOption[];
  name?: string;
  id?: string;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
  height?: string | number;
  borderRadius?: string | number;
  fontSize?: {
    xs: string;
    md: string;
  };
  placeholderFontSize?: {
    xs: string;
    md: string;
  };
  sx?: SxProps<Theme>;
}

export default function CustomDropdown({
  label = "",
  value = "",
  onChange,
  options = [],
  name,
  id,
  fullWidth = true,
  required = false,
  disabled = false,
  height = "44px",
  borderRadius = "8px",
  fontSize = { xs: "14px", md: "16px" },
  placeholderFontSize = { xs: "12px", md: "14px" },
  sx = {},
}: CustomDropdownProps) {
  const labelId = `${id || name || "custom-dropdown"}-label`;

  return (
    <FormControl
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
      sx={{
        "& .MuiOutlinedInput-root": {
          minHeight: height,
          borderRadius,
          backgroundColor: inputBackground,
          fontFamily: "var(--font-plus-jakarta)",
          fontSize,

          "& fieldset": {
            borderColor: borderColor,
          },

          "&:hover fieldset": {
            borderColor: Primary,
          },

          "&.Mui-focused fieldset": {
            borderColor: Secondary,
          },

          "&.Mui-disabled": {
            backgroundColor: inputBackground,
            opacity: 0.6,
          },
        },

        "& .MuiInputLabel-root": {
          fontFamily: "var(--font-plus-jakarta)",
          color: txtMuted,
          fontSize: placeholderFontSize,
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: Primary,
        },

        "& .MuiInputLabel-root.Mui-disabled": {
          color: txtMuted,
        },

        "& .MuiSelect-select": {
          fontFamily: "var(--font-plus-jakarta)",
          color: txtWhite,
          fontSize,
          fontWeight: 500,
        },

        "& .MuiSelect-icon": {
          color: txtMuted,
        },

        "& .MuiSelect-icon.MuiSelect-iconOpen": {
          color: Primary,
        },

        ...sx,
      }}
    >
      <InputLabel id={labelId}>{label}</InputLabel>

      <Select<string | number>
        labelId={labelId}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
        MenuProps={{
          slotProps: {
            paper: {
              sx: {
                mt: 0.5,
                backgroundColor: cardBackground,
                border: `1px solid ${borderColor}`,
                borderRadius: "8px",
                color: txtWhite,
                maxHeight: 300,
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize,
              color: txtWhite,

              "&:hover": {
                backgroundColor: inputBackground,
                color: Primary,
              },

              "&.Mui-selected": {
                backgroundColor: inputBackground,
                color: Primary,
              },

              "&.Mui-selected:hover": {
                backgroundColor: inputBackground,
                color: Secondary,
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
