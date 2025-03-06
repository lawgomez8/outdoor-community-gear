
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import CommunitySection from '../components/CommunitySection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <ProductShowcase />
      <CommunitySection />
      <AboutSection />
    </Layout>
  );
};

export default Index;
