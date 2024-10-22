import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import { Box } from "@mui/material";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <Box mt={2} />
      <LoginForm />
    </div>
  );
}
