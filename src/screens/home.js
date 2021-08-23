import React, { useRef } from 'react';
import Header from '../sections/header';
import Features from '../sections/features';
import Faqs from '../sections/faq';
import Newsletter from '../sections/newsletter';
import Footer from '../sections/footer';
import Timeline from '../sections/timeline';
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
      <Timeline />
      <Faqs />
      <Newsletter />

      <Footer />
    </div>
  );
}
