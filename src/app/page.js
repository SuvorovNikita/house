'use client';

import React, { useState } from 'react';

import Catalog from '@/components/Catalog/Catalog';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Newbies from '@/components/Newbies/Newbies';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [cart, setCart] = useState([]);

  const updateCartCount = (count) => {
    setCart((prevCart) => [...prevCart, ...count]);
  };

  return (
    <>
      <Header cart={cart} />
      <main className="main">
        <Hero />
        <Catalog updateCartCount={updateCartCount} />
        <Newbies />
        <About />
      </main>
      <Footer />
    </>
  );
}
