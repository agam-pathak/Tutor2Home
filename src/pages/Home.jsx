import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutFounder from '../components/AboutFounder';
import ResultsGallery from '../components/ResultsGallery';
import Reviews from '../components/Reviews';
import BlogTips from '../components/BlogTips';
import FAQ from '../components/FAQ';
import BookingForm from '../components/BookingForm';

const Home = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const onClassSelect = (className) => {
    const classOnly = className.replace('Class ', '');
    setSelectedClass(classOnly);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onBookingClick={() => {
        const bookingSection = document.getElementById('booking');
        if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
      }} />
      <AboutFounder />
      <Services onClassSelect={onClassSelect} />
      <ResultsGallery />
      <Reviews />
      <BlogTips />
      <FAQ />
      <BookingForm preSelectedClass={selectedClass} />
    </>
  );
};

export default Home;
