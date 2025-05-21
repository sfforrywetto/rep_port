import  Header  from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import ProjectsPage from '../../../../components/ProjectsComponent';
// import ProjectsPage from '../../../../components/test';

export default function Project1() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#F0EAD6]">
        <Header />
        <section className="p-8 ">
          <ProjectsPage />
        </section>
        <Footer />
    </main>
  );
}