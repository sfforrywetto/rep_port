import Header from "../../components/Header"
import CardCarousel from "../../components/CardCarousel"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between bg-[#F0EAD6]">
      <Header />
      <section className="p-8 ">
        <p className="text-2xl font-bold text-[#143d1c]">Introducing my portfolio gallary as Web/Grafik-Designer and IT-Specialist</p>
        <p className="text-lg font-light">To see my projects click on Projects on the top or choose one from introduced bellow </p>
        <p className="text-lg font-light">To see my projects click on -Projects- on the top or choose one from introduced bellow </p>
        <CardCarousel />
      </section>
      <Footer />
    </main>
  );
}
