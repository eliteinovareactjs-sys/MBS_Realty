import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "#",
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
      color: "hover:text-blue-300",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#",
      color: "hover:text-blue-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Property Sales",
    "Property Valuation",
    "Investment Consulting",
    "Legal Support",
    "Property Management",
    "Mortgage Assistance",
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">

      {/* =========================================================
          BACKGROUND PATTERN
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-purple-500 blur-3xl" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =======================================================
            MAIN FOOTER CONTENT
        ======================================================== */}

        <div className="py-14 lg:py-16">

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {/* ===================================================
                COMPANY INFO
            ==================================================== */}

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              {/* Logo */}
              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                  <BuildingOfficeIcon className="h-6 w-6 text-white" />
                </div>

                <div>
                  <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-2xl font-bold text-transparent">
                    MBS REALITY
                  </span>

                  <p className="text-sm text-blue-200">
                    Premium Real Estate
                  </p>
                </div>

              </div>

              {/* Description */}
              <p className="mb-6 max-w-md text-[15px] leading-7 text-gray-300">
                Your trusted partner in real estate. We specialize in helping
                clients find their dream properties with exceptional service,
                expertise, and personalized attention to detail.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-lg transition-all duration-300 hover:bg-gray-600 ${social.color}`}
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ===================================================
                QUICK LINKS
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >

              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                <ChevronRightIcon className="h-4 w-4 text-blue-400" />
                Quick Links
              </h3>

              <ul className="space-y-3">

                {quickLinks.map((link) => (
                  <li key={link.name}>

                    <motion.a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                      whileHover={{ x: 5 }}
                    >

                      <ChevronRightIcon className="h-3 w-3 flex-shrink-0 text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <span>{link.name}</span>

                    </motion.a>

                  </li>
                ))}

              </ul>
            </motion.div>

            {/* ===================================================
                SERVICES
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              viewport={{ once: true }}
            >

              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                <ChevronRightIcon className="h-4 w-4 text-blue-400" />
                Our Services
              </h3>

              <ul className="space-y-3">

                {services.map((service) => (
                  <li key={service}>

                    <motion.a
                      href="#services"
                      className="group flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                      whileHover={{ x: 5 }}
                    >

                      <ChevronRightIcon className="h-3 w-3 flex-shrink-0 text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <span>{service}</span>

                    </motion.a>

                  </li>
                ))}

              </ul>
            </motion.div>

            {/* ===================================================
                CONTACT INFO
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >

              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                <ChevronRightIcon className="h-4 w-4 text-blue-400" />
                Contact Info
              </h3>

              {/* Contact Items */}
              <div className="space-y-5">

                {/* ================= ADDRESS ================= */}

                <div className="flex items-start gap-3">

                  <MapPinIcon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />

                  <div className="min-w-0 text-sm leading-6">
                    <p className="text-gray-300">
                      104/1, 2nd Floor, Sri Ganapathy illam
                    </p>

                    <p className="text-gray-300">
                      Narayana Guru Mission Road, Saibaba Colony,
                      Coimbatore - 641 011
                    </p>
                  </div>

                </div>

                {/* ================= PHONE ================= */}

                <div className="flex items-start gap-3">

                  <PhoneIcon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />

                  <p className="min-w-0 text-sm leading-6 text-gray-300">
                    +91 97905 16014,
                    <br className="hidden sm:block" />
                    {" "}+91 94899 23772
                  </p>

                </div>

                {/* ================= EMAIL ================= */}

                <div className="flex items-start gap-3">

                  <EnvelopeIcon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />

                  <div className="min-w-0 text-sm leading-6">

                    <p className="break-all text-gray-300">
                      mbsreality@gmail.com
                    </p>

                    <p className="break-all text-gray-300">
                      info@mbsrealty.com
                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  NEWSLETTER
              ================================================== */}

              <div className="mt-7">

                <h4 className="mb-3 text-sm font-semibold text-white">
                  Stay Updated
                </h4>

                <div className="flex gap-2">

                  <input
                    type="email"
                    placeholder="Your email"
                    className="min-w-0 flex-1 rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none transition-colors focus:border-blue-400"
                  />

                  <motion.button
                    type="button"
                    className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    Join
                  </motion.button>

                </div>

              </div>

            </motion.div>

          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <motion.div
          className="border-t border-gray-700 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* Copyright */}
            <p className="text-center text-xs leading-6 text-gray-400 md:text-left">
              &copy; {currentYear} MBS Realty. All rights reserved.
              <span className="hidden sm:inline">
                {" "} | Premium Real Estate Services
              </span>
            </p>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400 md:justify-end">

              <p>
                Digital Partnered By :{" "}
                <a
                  href="https://balasabarisoftwaredeveloper.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-white"
                >
                  BalaSabari Software Developer
                </a>
              </p>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Cookie Policy
              </a>

            </div>

          </div>

        </motion.div>

      </div>

      {/* =========================================================
          FLOATING CALL BUTTON
      ========================================================== */}

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{
          opacity: 0,
          scale: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >

        <motion.a
          href="tel:+919790516014"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
          }}
          aria-label="Call MBS Realty"
        >
          <PhoneIcon className="h-6 w-6" />
        </motion.a>

      </motion.div>

    </footer>
  );
};

export default Footer;