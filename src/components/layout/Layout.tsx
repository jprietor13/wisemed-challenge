import { Header } from "./landing/Header";
import { ListPatients } from "./landing/ListPatients";
import { Footer } from "./landing/Footer";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <ListPatients />
      </main>
      <Footer />
    </div>
  );
};
