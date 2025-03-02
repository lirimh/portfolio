import React from "react";
import { ContactForm } from "../ui/contact-form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-zinc-900 flex-col items-center justify-center text-white text-4xl"
    >
      <h1 className="text-center md:text-7xl lg:text-7xl text-3xl font-bold">
        Contact
      </h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
