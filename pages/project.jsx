import { BrowserMockup } from "./components/BrowserMockup";
import { Layout } from "./components/Layout";

export default function Project() {
  return (
    <Layout>
      <h1 className="container pt-10 text-center">project</h1>
      <h3 className="text-center pt-3">
        Berikut adalah projectan yang pernah saya buat
      </h3>
      <BrowserMockup />
    </Layout>
  );
}
