import { Header } from "./landing/Header";
import { ListPatients } from "./landing/ListPatients";
import { Footer } from "./landing/Footer";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="fixed-grid has-3-cols">
        <ListPatients />
      </main>
      <Footer />
    </div>
  );
};
