import React from 'react';
import HeaderAbout from '../sections/aboutHeader';
import Mission from '../sections/mission';
import Team from '../sections/team';
import TeamB from '../sections/teamb';
import Footer from '../sections/footer';

export default function AboutUs() {
  return (
    <div>
      <HeaderAbout />
      <Mission />
      <Team />
      <TeamB />
      <Footer />
    </div>
  );
}
