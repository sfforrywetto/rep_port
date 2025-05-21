import  Header  from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import ContactPage from '../../../../components/ContactComponent';

export default function Project1() {
  return (
    <main className="h-screen flex flex-col justify-between bg-[#F0EAD6]">
        <Header />
        <section className="p-8 ">
          <ContactPage />
        </section>
        <Footer />
    </main>
  );
}
