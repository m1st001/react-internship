import styled from "styled-components";
import { Box, TextField } from "@mui/material";

export const PasswordInput = styled(TextField)``;
PasswordInput.defaultProps = {
  variant: "outlined",
  id: "password",
  label: "Password",
  type: "password",
};

export const EmailInput = styled(TextField)``;
EmailInput.defaultProps = {
  variant: "outlined",
  id: "email",
  label: "Email",
  type: "email",
};

export const InputBox = styled(Box)``;
InputBox.defaultProps = {
  display: "flex",
  flexDirection: "column",
  p: 2,
  sx: {
    gap: 1,
  },
};
