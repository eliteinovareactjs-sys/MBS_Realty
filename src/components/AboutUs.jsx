import React from "react";
import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  CheckIcon,
  StarIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import AboutCardImage from "../assets/AboutCardImage.avif";

const AboutUs = () => {
  const features = [
    "Sales & Investment Opportunities",
    "Market Analysis & Corporate Services",
    "Property Management",
    "Industrial, Commercial & Residential Properties",
    "25+ years of Excellence",
    "Professional Team Management",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-6 lg:py-0">

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================== */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[25%] h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-yellow-50/60 blur-3xl" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-[1250px] px-[13px] lg:min-h-[775px]">

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_576px] lg:gap-[65px]">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-6 lg:pt-[24px]"
          >

            {/* ===================================================
                SINCE 2008 BADGE
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex h-[38px] items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4"
            >
              <StarIcon
                className="h-[16px] w-[16px] text-blue-600"
                strokeWidth={1.8}
              />

              <span className="text-[15.3px] font-semibold leading-none text-blue-700">
                Since 2008
              </span>
            </motion.div>

            {/* ===================================================
                HEADING
            ==================================================== */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-5 text-[44.9px] font-[900] leading-[1.05] tracking-[-1.5px] text-[#111827] sm:text-[49px]"
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] bg-clip-text text-transparent">
                MBS REALITY
              </span>
            </motion.h2>

            {/* ===================================================
                FIRST PARAGRAPH
            ==================================================== */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-[575px] text-[16.3px] font-semibold leading-[1.75] text-[#3f4b60]"
            >
              <span className="font-bold text-[#374151]">
                MBS REALITY
              </span>{" "}
              stands as a premier full-service Real Estate company offering
              comprehensive solutions in Sales, Investment Opportunities,
              Analysis, Corporate Services, and Property Management throughout
              Tamil Nadu.
            </motion.p>

            {/* ===================================================
                SECOND PARAGRAPH
            ==================================================== */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 max-w-[575px] text-[16.3px] font-medium leading-[1.75] text-[#596579]"
            >
              With over{" "}
              <span className="font-bold text-[#2563eb]">
                25 years of excellence
              </span>
              , we've been serving the requirements of individuals, small to
              big corporates, and industrial entrepreneurs. We are one of the
              most successful real estate service organizations offering
              properties for Industrial, Commercial, and Residential land
              development.
            </motion.p>

            {/* ===================================================
                FEATURES
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.06,
                  }}
                  viewport={{ once: true }}
                  className="flex min-h-[27px] items-start gap-3"
                >
                  <span className="mt-[1px] flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center rounded-full bg-[#00c76f]">
                    <CheckIcon
                      className="h-[13px] w-[13px] text-white"
                      strokeWidth={3}
                    />
                  </span>

                  <span className="text-[13.8px] font-semibold leading-[1.45] text-[#4b5563]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* ===================================================
                CEO BOX
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 rounded-[15px] border border-[#d9e3ff] bg-gradient-to-br from-[#eef5ff] via-[#f3f4ff] to-[#faf2ff] px-6 py-6"
            >
              <p className="max-w-[510px] text-[15.3px] font-semibold leading-[1.55] text-[#3f4b60]">
                "The company is managed by a team of professionals headed by
                the Chief Executive"
              </p>

              <div className="mt-4 flex items-center gap-3">

                {/* CEO ICON */}
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6]">
                  <BuildingOfficeIcon
                    className="h-[20px] w-[20px] text-white"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="text-[14.3px] font-bold text-[#2563eb]">
                    Mr R. MAHALINGAM
                  </p>

                  <p className="mt-[2px] text-[12.2px] font-medium text-[#64748b]">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                LEARN MORE ABOUT OUR JOURNEY
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-5"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[14.3px] font-bold text-[#2563eb] transition-colors duration-300 hover:text-[#1d4ed8]"
              >
                Learn More About Our Journey

                <ArrowRightIcon
                  className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

          </motion.div>

          {/* =====================================================
              RIGHT CARD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:mt-[93px]"
          >

            {/* ===================================================
                GRADIENT BORDER
            ==================================================== */}

            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="rounded-[27px] bg-gradient-to-br from-[#2775ff] via-[#7c3aed] to-[#ec259b] p-[4px] shadow-[0_20px_50px_rgba(124,58,237,0.18)]"
            >

              {/* =================================================
                  WHITE CARD
              ================================================== */}

              <div className="rounded-[23px] bg-white px-[32px] pb-[30px] pt-[32px]">

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-[504px] w-full overflow-hidden rounded-[15px]">

                  <img
                    src={AboutCardImage}
                    alt="MBS Realty - Real Estate"
                    className="h-full w-full object-cover"
                  />

                  {/* =================================================
                      25+ years
                  ================================================== */}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute left-4 top-4 rounded-[8px] bg-white px-[13px] py-[11px] shadow-[0_5px_15px_rgba(0,0,0,0.12)]"
                  >
                    <span className="text-[13px] font-bold text-[#1f2937]">
                      25+ Years
                    </span>
                  </motion.div>

                  {/* =================================================
                      500+ CLIENTS
                  ================================================== */}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute right-4 top-4 rounded-[8px] bg-[#00c853] px-[13px] py-[11px] shadow-[0_5px_15px_rgba(0,0,0,0.15)]"
                  >
                    <span className="text-[13px] font-bold text-white">
                      500+ Clients
                    </span>
                  </motion.div>

                  {/* =================================================
                      CENTER MBS REALTY
                  ================================================== */}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.7,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 top-1/2 flex h-[136px] w-[144px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[16px] bg-white/95 shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-sm"
                  >
                    <BuildingOfficeIcon
                      className="mb-2 h-[39px] w-[39px] text-[#2563eb]"
                      strokeWidth={1.8}
                    />

                    <p className="text-[17px] font-bold text-[#273244]">
                      MBS REALITY
                    </p>

                    <p className="mt-[2px] text-[12px] font-medium text-[#6b7280]">
                      Real Estate
                    </p>
                  </motion.div>

                  {/* =================================================
                      TAMIL NADU
                  ================================================== */}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-[8px] bg-[#1769ff] px-[16px] py-[11px] shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                  >
                    <span className="text-[13px] font-bold text-white">
                      Tamil Nadu
                    </span>
                  </motion.div>

                </div>

                {/* =================================================
                    CARD FOOTER
                ================================================== */}

                <div className="pt-[27px] text-center">

                  <h3 className="text-[19px] font-[900] leading-none text-[#111827]">
                    Excellence in Real Estate
                  </h3>

                  <p className="mt-[12px] text-[12px] font-medium text-[#64748b]">
                    Trusted by corporates and individuals across Tamil Nadu
                  </p>

                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;