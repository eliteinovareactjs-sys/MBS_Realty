import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-[92px]
            right-6
            md:bottom-[104px]
            md:right-6
            z-40

            flex
            h-14
            w-14
            md:h-14
            md:w-14

            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-[#4775ff]
            to-[#9b3df4]

            text-white

            shadow-[0_8px_25px_rgba(79,70,229,0.35)]

            transition-all
            duration-300

            hover:shadow-[0_10px_30px_rgba(79,70,229,0.45)]

            focus:outline-none
          "
          aria-label="Scroll to top"
        >
          <ArrowUpIcon
            className="h-6 w-6"
            strokeWidth={1.8}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}