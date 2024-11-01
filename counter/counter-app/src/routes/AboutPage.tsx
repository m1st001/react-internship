import { PageContent, PageHeader } from "../styles/pageStyles";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <PageHeader>About us</PageHeader>
      <PageContent>
        Le very cool company. Definitely worth buying from.
      </PageContent>
    </div>
  );
}
