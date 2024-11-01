import { Box } from "@mui/material";
import { store } from "../../models/mstStore";
import { observer } from "mobx-react-lite";
import React from "react";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import { PageContent } from "../../styles/pageStyles";
import { useNavigate } from "react-router-dom";

const MstLoginPage: React.FC = observer(() => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/loginviamst/success");
  };

  const handleChange = (formData: { email: string; password: string }) => {
    store.setEmail(formData.email);
    store.setPassword(formData.password);
  };

  return (
    <div>
      <Navbar />
      <Box mt={2} />
      <LoginForm onFormSubmit={handleSubmit} onFormChange={handleChange} />
      <PageContent>{JSON.stringify(store)}</PageContent>
    </div>
  );
});

export default MstLoginPage;
