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

const StatisticsCounter = () => {
  return (
    <motion.section
      className="text-center py-10 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <em className="italic font-serif">Clients</em> we cherish
      </motion.h2>{" "}
      <motion.div
        className="flex flex-wrap justify-center gap-16 text-xl font-semibold"
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
      </motion.div>
    </motion.section>
  );
};

export default StatisticsCounter;
