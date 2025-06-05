"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  target: number;
}

const AnimatedCounter = ({ target }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [motionValue, isInView, target]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);
  return (
    <motion.span
      ref={ref}
      className="text-4xl font-black text-black counter tracking-tight leading-none"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      0
    </motion.span>
  );
};

const Clients = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <motion.div
        className="text-center pt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {" "}
        <motion.h2
          className="text-2xl sm:text-[2.5rem] font-normal mb-12 text-center leading-none tracking-wider"
          style={{
            fontFamily: "vinila, sans-serif",
            fontStyle: "normal",
            letterSpacing: "0.01em",
            fontWeight: "700",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our{" "}
          <span
            className="text-gray-700"
            style={{
              fontFamily: "vinila, sans-serif",
              fontWeight: "700",
            }}
          >
            Impact
          </span>
          , at a Glance
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-16 text-xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={6} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">years of Experience</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={100} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">Clients</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={40} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">Industries</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={20} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">Digital Services</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={1000} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">
              Students and Graduates Trained
            </div>
          </motion.div>
        </motion.div>{" "}
      </motion.div>

      <style jsx>{`
        .scrolling-wrapper {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;
