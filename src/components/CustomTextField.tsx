import { IconButton, InputAdornment, TextField } from "@mui/material";

import type { TextFieldProps } from "@mui/material";
import type { SystemStyleObject, Theme } from "@mui/system";
import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import {
  Primary,
  borderColor,
  inputBackground,
  txtLight,
  txtMuted,
  red,
} from "./Colors";

type CustomTextFieldProps = Omit<
  TextFieldProps,
  "onChange" | "variant" | "sx"
> & {
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  name?: string;
  id?: string;
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: ReactNode;
  autoComplete?: string;
  multiline?: boolean;
  rows?: number;
  limit?: number;
  height?: string | number;
  borderRadius?: string | number;
  fontSize?: string | number;
  placeholderFontSize?:
    | string
    | number
    | {
        xs?: string | number;
        md?: string | number;
      };
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  startIcon?: ReactNode;
  sx?: SystemStyleObject<Theme>;
};

export default function CustomTextField({
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  label = "",
  name,
  id,
  fullWidth = true,
  variant = "outlined",
  disabled = false,
  required = false,
  error = false,
  helperText = "",
  autoComplete = "off",
  multiline = false,
  rows = 4,
  limit,
  height = "52px",
  borderRadius = "4px",
  fontSize = "15px",
  placeholderFontSize = {
    xs: "13px",
    md: "15px",
  },
  inputProps = {},
  startIcon,
  sx = {},
  ...props
}: CustomTextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : type === "number"
      ? "text"
      : type;
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let newValue = event.target.value;
    if (type === "number") {
      newValue = newValue.replace(/[^0-9]/g, "");
    }
    if (limit) {
      newValue = newValue.slice(0, limit);
    }
    if (onChange) {
      const modifiedEvent = {
        ...event,
        target: {
          ...event.target,
          value: newValue,
        },
      } as ChangeEvent<HTMLInputElement>;
      onChange(modifiedEvent);
    }
  };

  return (
    <TextField
      fullWidth={fullWidth}
      type={inputType}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      label={label}
      name={name}
      id={id}
      variant={variant}
      disabled={disabled}
      required={required}
      error={error}
      helperText={helperText}
      autoComplete={autoComplete}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      slotProps={{
        htmlInput: {
          maxLength: limit,
          inputMode:
            inputProps.inputMode || (type === "number" ? "numeric" : undefined),
          ...inputProps,
        },
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : undefined,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                disabled={disabled}
                aria-label={showPassword ? "Hide password" : "Show password"}
                sx={{
                  color: txtMuted,
                  "&:hover": {
                    color: Primary,
                    backgroundColor: "transparent",
                  },
                }}
              >
                {showPassword ? (
                  <VisibilityOff sx={{ fontSize: "20px" }} />
                ) : (
                  <Visibility sx={{ fontSize: "20px" }} />
                )}
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          minHeight: multiline ? "auto" : height,
          borderRadius,
          fontSize,
          backgroundColor: `${inputBackground} !important`,
          color: txtLight,

          "& fieldset": {
            borderColor: borderColor,
          },

          "&:hover": {
            backgroundColor: `${inputBackground} !important`,
          },

          "&:hover fieldset": {
            borderColor: txtMuted,
          },

          "&.Mui-focused": {
            backgroundColor: `${inputBackground} !important`,
          },

          "&.Mui-focused fieldset": {
            borderColor: Primary,
            borderWidth: "1px",
          },

          "&.Mui-error fieldset": {
            borderColor: red,
          },
        },

        "& .MuiInputBase-input": {
          color: txtLight,
          fontSize,
          fontWeight: 400,
          paddingTop: "14px",
          paddingBottom: "14px",

          // Chrome / Edge autofill fix
          "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 1000px ${inputBackground} inset !important`,
            WebkitTextFillColor: `${txtLight} !important`,
            caretColor: txtLight,
            transition: "background-color 9999s ease-out 0s",
          },

          "&:-webkit-autofill:hover": {
            WebkitBoxShadow: `0 0 0 1000px ${inputBackground} inset !important`,
            WebkitTextFillColor: `${txtLight} !important`,
          },

          "&:-webkit-autofill:focus": {
            WebkitBoxShadow: `0 0 0 1000px ${inputBackground} inset !important`,
            WebkitTextFillColor: `${txtLight} !important`,
          },
        },

        "& .MuiInputBase-input::placeholder": {
          color: txtMuted,
          opacity: 1,
          fontSize: placeholderFontSize,
        },

        "& .MuiInputAdornment-root": {
          color: txtMuted,
        },

        "& .MuiInputLabel-root": {
          color: txtMuted,
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: Primary,
        },

        "& .MuiFormHelperText-root": {
          color: red,
          marginLeft: 0,
        },

        ...sx,
      }}
      {...props}
    />
  );
}
