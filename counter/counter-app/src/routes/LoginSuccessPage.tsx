import { PageContent, PageHeader } from "./PageStyles";
import { Card, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./LoginPages/ReduxLoginPage";

interface loginInfo {
  provider: string;
  email: string;
  password: string;
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
