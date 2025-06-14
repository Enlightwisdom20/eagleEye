"use client";

import React from "react";
import AnimatedTitle2 from "@/components/ui/AnimatedTitle2";

const TestimonialsSlideshow = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aishwarya J., Final Year BBA",
      content:
        "Before this, I only knew how to scroll on Instagram. Now I know how brands actually sell there. The session on digital ads was super useful!",
    },
    {
      id: 2,
      name: "Sneha P., BCA Final Year",
      content:
        "AI in marketing sounded complicated at first, but after this training, it feels doable. We even tried out real tools like ChatGPT and Canva!",
    },
    {
      id: 3,
      name: "Fatima Z., Final Year B.Com",
      content:
        "I used to think LinkedIn is only for top-level people. After the training, I built my profile, added my work, and started getting views!",
    },
    {
      id: 5,
      name: "Arjun V., BMS Student",
      content:
        "Full paisa vasool session! Very practical and chill. Loved how every topic was explained with live examples.",
    },
    {
      id: 6,
      name: "Rajveer S., BCA",
      content:
        "Ma’am was super friendly and kept it interactive. We asked so many doubts and not once were we made to feel silly. 10/10 experience!",
    },
    {
      id: 7,
      name: "Saurabh Mehta, Marketing, FreshBite Foods",
      content:
        "What stood out was how everything was simplified—no jargon, just straight-up value. It’s rare to find someone who connects equally well with students and entrepreneurs.",
    },
    {
      id: 8,
      name: "Assistant Professor, Commerce",
      content:
        "The AI marketing module especially stood out. Students were thrilled to see tools like ChatGPT and Canva being used live. Very relevant and timely.",
    },
  ];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 w-80 h-36 mx-2 flex-shrink-0 flex flex-col justify-between">
      <p className="text-gray-700 text-xs leading-relaxed flex-1 overflow-hidden mb-2">
        {testimonial.content}
      </p>
      <div className="font-semibold text-gray-900 text-xs">
        - {testimonial.name}
      </div>
    </div>
  );

  return (
    <div className="bg-white w-full py-16 px-4 overflow-hidden isolate">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-left mb-12">
          <AnimatedTitle2
            className="text-2xl sm:text-[2.5rem] font-normal text-gray-900 mb-4 leading-none tracking-wider"
            style={{
              fontFamily: "vinila, sans-serif",
              fontStyle: "normal",
              letterSpacing: "0.01em",
              fontWeight: "700",
            }}
          >
            From Our{" "}
            <span
              className="text-gray-700"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: "700",
              }}
            >
              Learners
            </span>
          </AnimatedTitle2>
        </div>

        <div className="space-y-6">
          {/* Single Row - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* Multiple sets for seamless infinite loop */}
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`row1-set${setIndex}-${testimonial.id}`}
                    testimonial={testimonial}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSlideshow;
