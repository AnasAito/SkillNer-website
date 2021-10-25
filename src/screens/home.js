import React, { useRef } from 'react';
import Header from '../sections/header';
import Features from '../sections/features';
import Faqs from '../sections/faq';
import Newsletter from '../sections/newsletter';
import Footer from '../sections/footer';
import Timeline from '../sections/timeline';
import HowItWork from '../sections/howItWork';
export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div>
      <Header executeScroll={executeScroll} />

      <Features />

      <div ref={myRef}>
        <HowItWork />
      </div>
      <Timeline />
      <Faqs />
      <Newsletter />

      <Footer />
    </div>
  );
}
