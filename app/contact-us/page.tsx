import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsHeroSection from "@/components/ContactUs/ContactUsHero";
import HeroSectionLayout from "@/components/Home/HeroSectionLayout";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <HeroSectionLayout scrollHref="#contact-form">
        <ContactUsHeroSection />
      </HeroSectionLayout>
      <ContactUsForm />
    </>
  );
};

export default ContactUs;
