import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import AboutPage from "./routes/AboutPage";
import CountersPage from "./routes/CountersPage";
import RootPage from "./routes/RootPage";
import LoginPage from "./routes/LoginPages/LoginPage";
import ReduxLoginPage from "./routes/LoginPages/ReduxLoginPage";
import LoginSuccessPage from "./routes/LoginSuccessPage";
import FormikLoginPage from "./routes/LoginPages/FormikLoginPage";
import ActivityPage from "./routes/ActivityPage";
import MstLoginPage from "./routes/LoginPages/MstLoginPage";
import { GlobalStyle, Root } from "./styles/globalStyles";

function App() {
  const router = createHashRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <RootPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "counters",
          element: <CountersPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "loginviaredux",
          element: <ReduxLoginPage />,
        },
        {
          path: "loginviaredux/success",
          element: <LoginSuccessPage />,
        },
        {
          path: "loginviaformik",
          element: <FormikLoginPage />,
        },
        {
          path: "loginviaformik/success",
          element: <LoginSuccessPage />,
        },
        {
          path: "getactivity",
          element: <ActivityPage />,
        },
        {
          path: "loginviamst",
          element: <MstLoginPage />,
        },
        {
          path: "loginviamst/success",
          element: <LoginSuccessPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Root></Root>
    </>
  );
}

export default App;
