import React from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
} from "@mui/material";
import { Form, FormikProps } from "formik";
import { EmailInput, InputBox, PasswordInput } from "../styles/loginFormStyles";

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
              Log in
            </Typography>
          </CardContent>
          <InputBox>
            <EmailInput
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PasswordInput
              required
              slotProps={{ htmlInput: { minLength: 6 } }}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputBox>
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
