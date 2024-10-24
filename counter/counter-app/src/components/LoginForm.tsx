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

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    const jsonData = JSON.stringify(formData);

    console.log(jsonData);

    setEmail("");
    setPassword("");
  }

  return (
    <Container maxWidth="xs">
      <Card>
        <form onSubmit={handleSubmit}>
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
