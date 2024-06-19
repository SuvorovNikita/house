import Catalog from '@/components/Catalog/Catalog';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Newbies from '@/components/Newbies/Newbies';
import About from '@/components/About/About';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Catalog />
      <Newbies />
      <About />
    </main>
  );
}
