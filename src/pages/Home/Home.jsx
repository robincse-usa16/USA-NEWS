import Navbar from "../../components/layout/Navbar/Navbar";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import Container from "../../components/common/Container/Container";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <MainLayout />
      </Container>
    </>
  );
}
