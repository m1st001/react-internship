import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Button } from "../styles/globalStyles";
import { EmailInput, InputBox, PasswordInput } from "../styles/loginFormStyles";

interface LoginFormProps {
  onFormSubmit?: (formData: { email: string; password: string }) => void;
  onFormChange?: (formData: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onFormSubmit,
  onFormChange,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const formData = {
      email: email,
      password: password,
    };
    if (onFormChange) {
      onFormChange(formData);
    }
  }, [email, password, onFormChange]);

  return (
    <Container maxWidth="xs">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h4" component="h1" textAlign="center" p="1">
              Log in
            </Typography>
          </CardContent>
          <InputBox>
            <EmailInput
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          <CardActions>
            <Box sx={{ margin: "0 auto" }}>
              <Button type="submit">Login</Button>
            </Box>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
};

export default LoginForm;
