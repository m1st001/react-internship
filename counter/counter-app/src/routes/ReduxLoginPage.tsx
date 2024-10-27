import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import { Box } from "@mui/material";
import { PageContent } from "./PageStyles";
import { useSelector } from "react-redux";
import store from "../store/store";
import { updateForm } from "../store/FormSlice";

export type RootState = ReturnType<typeof store.getState>;

export default function ReduxLoginPage() {
  const formData = useSelector((state: RootState) => state.form);

  const handleFormChange = (formData: { email: string; password: string }) => {
    store.dispatch(updateForm(formData));
  };

  const handleFormSubmit = () => {
    const navigate = {
      pathname: "/#loginviaredux/success",
    };
    window.location.assign(navigate.pathname);
  };

  return (
    <div>
      <Navbar />
      <Box mt={2} />
      <LoginForm
        onFormSubmit={handleFormSubmit}
        onFormChange={handleFormChange}
      />
      <PageContent>{JSON.stringify(formData)}</PageContent>
    </div>
  );
}
