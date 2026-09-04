import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import CustomButton from "../CustomButton";
import {
  borderColor,
  cardBackground,
  red,
  txtLight,
  txtWhite,
} from "../Colors";

interface AdminDialogProps {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AdminDialog({
  open,
  loading = false,
  onClose,
  onConfirm,
}: AdminDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : onClose}
      fullWidth
      maxWidth="xs"
      slotProps={{
        paper: {
          sx: {
            width: { xs: "calc(100% - 32px)", md: "420px" },
            maxWidth: "420px",
            m: { xs: "16px", md: "32px" },
            backgroundColor: cardBackground,
            border: `1px solid ${borderColor}`,
            borderRadius: "8px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
            backgroundImage: "none",
          },
        },
      }}
    >
      {/* TITLE */}

      <DialogTitle
        sx={{
          color: txtWhite,
          fontSize: { xs: "18px", md: "20px" },
          fontWeight: 800,
          px: { xs: "18px", md: "24px" },
          pt: { xs: "18px", md: "24px" },
          pb: "8px",
        }}
      >
        Admin Logout
      </DialogTitle>

      {/* MESSAGE */}

      <DialogContent
        sx={{
          px: { xs: "18px", md: "24px" },
          py: "10px",
        }}
      >
        <Typography
          sx={{
            color: txtLight,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: 1.6,
          }}
        >
          Are you sure you want to log out of the admin portal?
        </Typography>
      </DialogContent>

      {/* ACTION BUTTONS */}

      <DialogActions
        sx={{
          px: { xs: "18px", md: "24px" },
          pt: "12px",
          pb: { xs: "18px", md: "24px" },
          gap: "10px",
        }}
      >
        <CustomButton
          text="Cancel"
          onClick={onClose}
          disabled={loading}
          bgColor="transparent"
          hoverColor="rgba(255,255,255,0.05)"
          textColor={txtLight}
          borderColor={borderColor}
          height="42px"
          width="110px"
          borderRadius="4px"
          fontSize="13px"
          fontWeight={700}
        />

        <CustomButton
          text={loading ? "Logging out..." : "Logout"}
          onClick={onConfirm}
          disabled={loading}
          bgColor={red}
          hoverColor={red}
          textColor={txtWhite}
          borderColor={red}
          height="42px"
          width="130px"
          borderRadius="4px"
          fontSize="13px"
          fontWeight={800}
        />
      </DialogActions>
    </Dialog>
  );
}
