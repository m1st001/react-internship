import React from "react";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
} from "@mui/material";
import { Form, FormikProps } from "formik";

export interface FormValues {
  email: string;
  password: string;
}

const FormikForm: React.FC<FormikProps<FormValues>> = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => {
  return (
    <Container maxWidth="xs">
      <Card>
        <Form>
          <CardContent>
            <Typography variant="h4" component="h1" textAlign="center" p="1">
              Formik log in
            </Typography>
          </CardContent>
          <Box display="flex" flexDirection="column">
            <TextField
              id="email"
              label="Email"
              variant="filled"
              type="email"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
              name="password"
              required
              slotProps={{ htmlInput: { minLength: 6 } }}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <CardActions>
            <Box sx={{ margin: "0 auto" }}>
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Box>
          </CardActions>
        </Form>
      </Card>
    </Container>
  );
};

export default FormikForm;
