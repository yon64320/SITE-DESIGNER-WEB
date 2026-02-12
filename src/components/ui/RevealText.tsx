"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "chars" | "words" | "lines";
}

export default function RevealText({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  splitBy = "words",
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = container.textContent || "";
    container.innerHTML = "";

    let elements: string[];
    if (splitBy === "chars") {
      elements = text.split("");
    } else if (splitBy === "words") {
      elements = text.split(" ");
    } else {
      elements = [text];
    }

    elements.forEach((item, i) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = splitBy === "words" ? (i < elements.length - 1 ? item + "\u00A0" : item) : item;
      inner.style.transform = "translateY(110%)";

      wrapper.appendChild(inner);
      container.appendChild(wrapper);
    });

    const inners = container.querySelectorAll("span > span");

    ScrollTrigger.create({
      trigger: container,
      start: "top 85%",
      onEnter: () => {
        gsap.to(inners, {
          y: "0%",
          duration: 0.8,
          stagger: 0.03,
          delay,
          ease: "power3.out",
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [children, delay, splitBy]);

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className}>
      {children}
    </Tag>
  );
}
