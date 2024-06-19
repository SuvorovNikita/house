import Catalog from '@/components/Catalog/Catalog';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Newbies from '@/components/Newbies/newbies';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Catalog />
      <Newbies />
    </main>
  );
}
