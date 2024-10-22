import React from "react";
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
  function handleSubmit() {}

  return (
    <Container maxWidth="xs">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h4" component="h1" textAlign="center" p="1">
              Sign Up
            </Typography>
          </CardContent>
          <Box display="flex" flexDirection="column">
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
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
