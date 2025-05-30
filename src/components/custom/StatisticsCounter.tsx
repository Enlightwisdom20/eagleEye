"use client";
import { useEffect, useRef } from "react";

const StatisticsCounter = () => {
  const countersRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Counter animation
    const duration = 2000; // total animation time in ms
    const counterElements = countersRef.current;
    counterElements.forEach((counter) => {
      if (!counter) return;

      const targetAttr = counter.getAttribute("data-target");
      if (!targetAttr) return;

      const target = +targetAttr;
      const increment = target / (duration / 16); // ~60 fps

      let current = 0;
      const update = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(update);
        } else {
          counter.textContent = target.toString();
        }
      };

      update();
    });
  }, []);
  // Add counter elements to the ref
  const setCounterRef = (el: HTMLElement | null) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  return (
    <section className="text-center py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Notable <em className="italic font-serif">Clients</em>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 text-lg font-medium">
        <div>
          <span
            className="text-3xl font-bold text-black counter"
            data-target="6"
            ref={setCounterRef}
          >
            0
          </span>
          + years of Experience
        </div>
        <div>
          <span
            className="text-3xl font-bold text-black counter"
            data-target="100"
            ref={setCounterRef}
          >
            0
          </span>
          + Clients
        </div>
        <div>
          <span
            className="text-3xl font-bold text-black counter"
            data-target="40"
            ref={setCounterRef}
          >
            0
          </span>
          + Industries
        </div>
        <div>
          <span
            className="text-3xl font-bold text-black counter"
            data-target="20"
            ref={setCounterRef}
          >
            0
          </span>
          + Digital Services
        </div>
        <div>
          <span
            className="text-3xl font-bold text-black counter"
            data-target="1000"
            ref={setCounterRef}
          >
            0
          </span>
          + Students and Graduates Trained
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
