// import Lamp from "../Lamp/lamp";

import React from "react";

// export default function PieChart(){
//     return <>
//         {/* <Lamp/> */}
//     </>
// }

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const data = [
  { name: "A", value: 43, color: "#558dcae3", order: "top" },
  { name: "B", value: 52, color: "#4C7CB0", order: "bottom" },
  { name: "C", value: 5, color: "#8FB8E3", order: "left" },
];

const calcMotion = (order: string, distance: number) => {
  switch (order) {
    case "top":
      return { x: distance };
    case "bottom":
      return { x: -distance };
    case "left":
      return { y: -distance };
    case "right":
      return { y: distance };
  }
};

const PieChart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    while (svg.firstChild) {
      // Loop through the child nodes
      svg.removeChild(svg.firstChild); // Remove each child node
    }
    const width = svg.getAttribute("width");
    const height = svg.getAttribute("height");
    const radius = Math.min(width, height) / 2;
    const centerX = width / 2;
    const centerY = height / 2;

    // Create a group element to hold the pie slices
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${centerX}, ${centerY})`);
    svg.appendChild(g);

    // Calculate the total value of the data
    const total = data.reduce((sum, d) => sum + d.value, 0);

    // Calculate the start and end angles for each slice
    let startAngle = 0;
    let endAngle = 0;
    data.forEach((d) => {
      startAngle = endAngle;
      endAngle = startAngle + (d.value / total) * 2 * Math.PI;

      // Create a path element for each slice
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("fill", d.color);

      // Use the SVG arc command to draw the slice
      const x1 = radius * Math.sin(startAngle);
      const y1 = -radius * Math.cos(startAngle);
      const x2 = radius * Math.sin(endAngle);
      const y2 = -radius * Math.cos(endAngle);
      const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
      path.setAttribute(
        "d",
        `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
      );

      // Set the stroke-dasharray and stroke-dashoffset properties
      const length = path.getTotalLength().toString();
      path.setAttribute("stroke", d.color);
      path.setAttribute("stroke-width", 1);
      path.setAttribute("stroke-dasharray", length);
      path.setAttribute("stroke-dashoffset", length);

      // Append the path to the group element
      g.appendChild(path);
    const motion = calcMotion(d.order,10)
      const hover = () => {
        gsap.to(path, { scale: 1.1, ...motion, duration: 0.5 });
      };

      // create a leave function that restores the div
      const leave = () => {
        gsap.to(path, { scale: 1, x: "0",y:"0", duration: 0.5 });
      };

      // add event listeners to the div
      path.addEventListener("mouseenter", hover);
      path.addEventListener("mouseleave", leave);

      // remove event listeners when the component unmounts
      return () => {
        path.removeEventListener("mouseenter", hover);
        path.removeEventListener("mouseleave", leave);
      };
    });

    // Animate the pie chart using gsap
    gsap.set(g.children, { scale: 0, transformOrigin: "center" });
    gsap.to(g.children, {
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.5)",
    });
    gsap.to(g.children, {
      strokeDashoffset: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      width="250"
      height="250"
      viewBox="0 0 250 250"
      style={{ cursor: "pointer", overflow: "visible" }}
    ></svg>
  );
};

export default PieChart;
