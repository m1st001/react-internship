import { PageContent, PageHeader } from "./PageStyles";
import { Card, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./LoginPages/ReduxLoginPage";
import { useLocation } from "react-router-dom";

interface loginInfo {
  provider: string;
  email: string;
  password: string;
}

function getFormikLoginInfo() {
  const location = useLocation();

  if (!location.state) {
    return {
      provider: "not provided",
      email: "",
      password: "",
    };
  }

  const { email, password } = location.state as {
    email: string;
    password: string;
  };

  return {
    provider: "Formik",
    email: email,
    password: password,
  };
}

function getReduxLoginInfo() {
  const state = useSelector((state: RootState) => state.form);
  return {
    provider: "Redux",
    email: state.email,
    password: state.password,
  };
}

export default function LoginSuccessPage() {
  const loginInfos: loginInfo[] = [];

  loginInfos.push(getReduxLoginInfo());
  loginInfos.push(getFormikLoginInfo());

  loginInfos.forEach((loginInfo) => {
    if (loginInfo.provider === "not provided") {
      loginInfos.splice(loginInfos.indexOf(loginInfo), 1);
    }
  });

  return (
    <div>
      <Navbar />
      <PageHeader>Successful login!</PageHeader>
      {loginInfos.map((loginInfo, index) => (
        <Container maxWidth="sm" key={index} sx={{ mt: 2 }}>
          <Card>
            <PageContent>Provider: {loginInfo.provider}</PageContent>
            <PageContent>Email: {loginInfo.email}</PageContent>
            <PageContent>Password: {loginInfo.password}</PageContent>
          </Card>
        </Container>
      ))}
    </div>
  );
}
