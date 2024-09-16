"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(false);

  const sections = [
    {
      title: "Let us find your",
      highlight: "Forever Home.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
      buttonText: "Get Started",
      secondaryText: "Learn More",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
    },
    {
      title: "Discover the best",
      highlight: "Real Estate Deals.",
      description:
        "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Explore Now",
      secondaryText: "Find Out More",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
    },
    {
      title: "Your dream home",
      highlight: "Awaits You.",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "Start Searching",
      secondaryText: "Contact Us",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeTransition(true);
      setTimeout(() => {
        setCurrentSection((prevSection) =>
          prevSection === sections.length - 1 ? 0 : prevSection + 1
        );
        setFadeTransition(false);
      }, 400); // Adjust this duration to match the CSS transition time
    }, 15000); // Change the section every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [sections.length]);

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${
        fadeTransition ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundImage: sections[currentSection].backgroundImage }}
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div
          className={`max-w-xl text-center ltr:sm:text-left rtl:sm:text-right transition-opacity duration-500 ease-in-out ${
            fadeTransition ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            {sections[currentSection].title}
            <strong className="block font-extrabold text-rose-500">
              {sections[currentSection].highlight}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            {sections[currentSection].description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow transition duration-500 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              {sections[currentSection].buttonText}
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              {sections[currentSection].secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;