import React from "react";
import Navbar from "../../components/Navbar";
import { Formik, FormikProps } from "formik";
import FormikForm, { FormValues } from "../../components/FormikForm";
import { Box } from "@mui/material";
import { PageContent } from "../../styles/pageStyles";
import { useNavigate } from "react-router-dom";

const FormikLoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Box mt={2} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          navigate("/loginviaformik/success", { state: values });
          setSubmitting(false);
        }}
      >
        {(props: FormikProps<FormValues>) => (
          <div>
            <FormikForm {...props} />
            <Box mt={4} textAlign="center">
              <PageContent>{JSON.stringify(props.values)}</PageContent>
            </Box>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormikLoginPage;
