import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

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

  const handleChange = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    if (onFormChange) {
      onFormChange(formData);
    }
  };

  return (
    <Container maxWidth="xs">
      <Card>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <CardContent>
            <Typography variant="h4" component="h1" textAlign="center" p="1">
              Log in
            </Typography>
          </CardContent>
          <Box display="flex" flexDirection="column">
            <TextField
              id="email"
              label="Email"
              variant="filled"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
              slotProps={{ htmlInput: { minLength: 6 } }}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
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
