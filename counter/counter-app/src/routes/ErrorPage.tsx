import { useRouteError } from "react-router-dom";
import { PageContent, PageHeader } from "../styles/pageStyles";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <PageHeader>404</PageHeader>
      <PageContent>Page not found.</PageContent>
    </div>
  );
}
