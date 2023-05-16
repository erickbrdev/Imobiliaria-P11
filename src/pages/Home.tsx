import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListPropertysHome from "../components/ListPropertysHome";
import Newsletter from "../components/Newsletter";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
  return (
    <main>
      <Header />
      <Whatsapp />

      <Carousel />
      <ListPropertysHome />
      <Newsletter />
      <Contact />

      <Footer />
    </main>
  );
}
