import Navbar from "../../components/Navbar";
import LoginForm from "../../components/LoginForm";
import { Box } from "@mui/material";

export default function LoginPage() {
  const handleFormSubmit = (formData: { email: string; password: string }) => {
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <Box mt={2} />
      <LoginForm onFormSubmit={handleFormSubmit} />
    </div>
  );
}
