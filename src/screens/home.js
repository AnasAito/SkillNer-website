import React, { useRef } from 'react';
import Header from '../sections/header';
import Features from '../sections/features';
import Newsletter from '../sections/newsletter';
import Footer from '../sections/footer';
export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div>
      <Header executeScroll={executeScroll} />
      <div ref={myRef}>
        <Features />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
