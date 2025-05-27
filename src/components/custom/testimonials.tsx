"use client";

import React from "react";

const TestimonialsSlideshow = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      handle: "@sarahc_dev",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face",
      content:
        "This product has completely transformed our development workflow. The documentation is fantastic and the support team is incredibly responsive.",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      handle: "@mjohnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      content:
        "I was skeptical at first, but after using this for 6 months, I can't imagine working without it. Game changer for our team's productivity.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      handle: "@emily_codes",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      content:
        "The learning curve was minimal and the results were immediate. Our client satisfaction has increased by 40% since implementation.",
    },
    {
      id: 4,
      name: "David Kim",
      handle: "@davidk_tech",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      content:
        "Best investment we've made this year. The ROI was apparent within the first month of usage.",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      handle: "@lisa_designs",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      content:
        "Finally, a solution that actually works as advertised. Clean interface, powerful features, and excellent performance.",
    },
    {
      id: 6,
      name: "Alex Rivera",
      handle: "@alex_builds",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      content:
        "I've tried dozens of similar tools, but nothing comes close to this level of quality and reliability.",
    },
    {
      id: 7,
      name: "Jessica Wu",
      handle: "@jessicawu_dev",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
      content:
        "The customer support is outstanding. They resolved our integration issues within hours, not days.",
    },
    {
      id: 8,
      name: "Michael Brown",
      handle: "@mikebrown_tech",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      content:
        "Honestly, this has saved us hundreds of hours of development time. The automation features are incredibly powerful.",
    },
    {
      id: 9,
      name: "Rachel Green",
      handle: "@rachel_creates",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      content:
        "We saw immediate improvements in our workflow efficiency. This tool pays for itself within weeks.",
    },
    {
      id: 10,
      name: "James Wilson",
      handle: "@jameswilson_dev",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
      content:
        "The integration was seamless and the performance gains were substantial. Highly recommend to any development team.",
    },
  ];

  // Split testimonials for two rows
  const row1Testimonials = testimonials.slice(0, 5);
  const row2Testimonials = testimonials.slice(5, 10);

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 w-80 h-32 mx-2 flex-shrink-0 flex flex-col justify-between">
      <div className="flex items-center mb-2">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-8 h-8 rounded-full mr-2 object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900 text-xs">
            {testimonial.name}
          </div>
          <div className="text-gray-500 text-xs">{testimonial.handle}</div>
        </div>
      </div>
      <p className="text-gray-700 text-xs leading-relaxed flex-1 overflow-hidden">
        {testimonial.content}
      </p>
    </div>
  );

  return (
    <div className="bg-gray-50 w-full py-16 px-4 overflow-hidden isolate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            workflow with our solution.
          </p>
        </div>

        <div className="space-y-6">
          {/* Row 1 - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* Multiple sets for seamless infinite loop */}
              {[...Array(4)].map((_, setIndex) =>
                row1Testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`row1-set${setIndex}-${testimonial.id}`}
                    testimonial={testimonial}
                  />
                )),
              )}
            </div>
          </div>

          {/* Row 2 - Moving Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* Multiple sets for seamless infinite loop */}
              {[...Array(4)].map((_, setIndex) =>
                row2Testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`row2-set${setIndex}-${testimonial.id}`}
                    testimonial={testimonial}
                  />
                )),
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
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
