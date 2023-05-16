import AllPropertys from "../components/AllPropertys";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";

export default function Property () {
  return (
    <main>
      <Whatsapp />
      <Header />

      <section>
        <AllPropertys />
      </section>

      <Footer />
    </main>
  )
}