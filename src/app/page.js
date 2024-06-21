import Catalog from '@/components/Catalog/Catalog';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Newbies from '@/components/Newbies/Newbies';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Catalog />
        <Newbies />
        <About />
      </main>
      <Footer />
    </>
  );
}
