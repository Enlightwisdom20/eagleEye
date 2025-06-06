"use client";

import { useState, useEffect, useRef } from "react";

interface NodeData {
  id: string;
  title: string;
  x: number;
  y: number;
  borderColor: string;
  hoverBgColor: string;
}

// Tree Component for mobile displays
function TreeComponent({
  rootNode,
  childNodes,
  hoveredNode,
  setHoveredNode,
}: {
  rootNode: { id: string; title: string };
  childNodes: NodeData[];
  hoveredNode: string | null;
  setHoveredNode: (id: string | null) => void;
}) {
  return (
    <div className="w-full h-fit bg-gradient-to-br from-slate-50 to-slate-100 p-10 overflow-y-auto">
      <div className="flex flex-col items-center space-y-6">
        {/* Root node */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {rootNode.title}
          </h1>
        </div>

        {/* Child nodes in a vertical tree layout */}
        <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
          {childNodes.map((node) => (
            <div
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`border-2 shadow-sm transition-all duration-200 rounded-lg px-4 py-3 ${
                  node.borderColor
                } ${
                  hoveredNode === node.id
                    ? `scale-105 shadow-lg ${node.hoverBgColor}`
                    : `hover:scale-102 bg-transparent`
                }`}
              >
                <h4 className="font-semibold text-lg text-gray-800 text-center">
                  {node.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const rootNode = {
    id: "root",
    title: "How we train, Simplified",
    x: 0,
    y: 20, // Moved up to be at the top
  };

  // More spread out positioning for child nodes with colors
  const childNodes: NodeData[] = [
    {
      id: "foundation",
      title: "Foundation First",
      x: -600,
      y: -250,
      borderColor: "border-blue-300",
      hoverBgColor: "bg-blue-50",
    },
    {
      id: "ai-tools",
      title: "AI + Tools Training",
      x: 400,
      y: -280,
      borderColor: "border-purple-300",
      hoverBgColor: "bg-purple-50",
    },
    {
      id: "practice",
      title: "Hands-On Practice",
      x: -470,
      y: 220,
      borderColor: "border-green-300",
      hoverBgColor: "bg-green-50",
    },
    {
      id: "industry",
      title: "Industry-Ready Modules",
      x: 370,
      y: 320,
      borderColor: "border-amber-300",
      hoverBgColor: "bg-amber-50",
    },
    {
      id: "resume",
      title: "Resume to Real-World",
      x: -50,
      y: -190,
      borderColor: "border-rose-300",
      hoverBgColor: "bg-rose-50",
    },
    {
      id: "live-case-studies",
      title: "Live Case Studies",
      x: -150,
      y: 290,
      borderColor: "border-rose-300",
      hoverBgColor: "bg-rose-50",
    },
    {
      id: "sessions",
      title: "Expert-Led Sessions",
      x: -680,
      y: 10,
      borderColor: "border-rose-300",
      hoverBgColor: "bg-rose-50",
    },
    {
      id: "certifications",
      title: "Certifications Included",
      x: 690,
      y: -50,
      borderColor: "border-rose-300",
      hoverBgColor: "bg-rose-50",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewportSize({ width, height });
      setIsMobile(width < 768);
    };

    // Initial size
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setMousePosition({
          x: (e.clientX - rect.left - centerX) * 0.1,
          y: (e.clientY - rect.top - centerY) * 0.1,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const getNodeStyle = (node: NodeData) => {
    const driftX = mousePosition.x * (1 + Math.abs(node.x) / 400);
    const driftY = mousePosition.y * (1 + Math.abs(node.y) / 400);

    return {
      transform: `translate(${node.x + driftX}px, ${node.y + driftY}px)`,
      transition: "transform 0.3s ease-out",
    };
  };

  // Calculate scale factor to fit everything in viewport
  const getScaleFactor = () => {
    if (viewportSize.width === 0 || viewportSize.height === 0) return 1;

    // Find the furthest node position
    const maxX = Math.max(...childNodes.map((node) => Math.abs(node.x))) + 150; // Add padding
    const maxY = Math.max(...childNodes.map((node) => node.y)) + 100; // Add padding

    // Calculate scale factors for width and height
    const scaleX = (viewportSize.width * 0.8) / (maxX * 2);
    const scaleY = (viewportSize.height * 0.8) / (maxY + 200); // Added more padding for top positioning

    // Use the smaller scale factor to ensure everything fits
    return Math.min(scaleX, scaleY, 1); // Cap at 1 to prevent oversizing
  };

  const scaleFactor = getScaleFactor();

  // Render tree component for mobile devices
  if (isMobile) {
    return (
      <TreeComponent
        rootNode={rootNode}
        childNodes={childNodes}
        hoveredNode={hoveredNode}
        setHoveredNode={setHoveredNode}
      />
    );
  }

  // Render mindmap for desktop
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transform: `scale(${scaleFactor})`,
        }}
      >
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {childNodes.map((child) => {
            const driftX = mousePosition.x * (1 + Math.abs(child.x) / 400);
            const driftY = mousePosition.y * (1 + Math.abs(child.y) / 400);
            const centerX = containerRef.current
              ? containerRef.current.offsetWidth / 2
              : 0;
            const centerY = containerRef.current
              ? containerRef.current.offsetHeight / 2
              : 0;

            return (
              <line
                key={child.id}
                x1={centerX}
                y1={centerY + rootNode.y}
                x2={centerX + child.x + driftX}
                y2={centerY + child.y + driftY}
                stroke="#e2e8f0"
                strokeWidth="2"
                className="transition-all duration-300 ease-out"
              />
            );
          })}
        </svg>

        {/* Root node */}
        <div
          className="absolute z-10"
          style={{
            transform: `translate(0px, ${rootNode.y}px)`,
          }}
        >
          <h1 className="text-6xl font-bold text-gray-800">{rootNode.title}</h1>
        </div>

        {/* Child nodes */}
        {childNodes.map((node) => (
          <div
            key={node.id}
            className="absolute z-10 cursor-pointer"
            style={getNodeStyle(node)}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div
              className={`border-2 shadow-sm transition-all duration-200 rounded-lg px-6 py-4 ${
                node.borderColor
              } ${
                hoveredNode === node.id
                  ? `scale-110 shadow-lg ${node.hoverBgColor}`
                  : `hover:scale-105 bg-transparent`
              }`}
            >
              <h4 className="font-semibold text-3xl text-gray-800 whitespace-nowrap">
                {node.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
