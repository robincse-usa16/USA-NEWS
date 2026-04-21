import Navbar from "../../components/layout/Navbar/Navbar";
import CategoryMenu from "../../components/layout/CategoryMenu/CategoryMenu";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Container from "../../components/common/Container/Container";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu />

      <Container>
        <MainLayout />
      </Container>
    </>
  );
}
