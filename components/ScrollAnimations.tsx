
'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollAnimatedElementProps {
  children: React.ReactNode;
  animation?: 'bounce' | 'wave' | 'wiggle' | 'fade';
  delay?: number;
}

export function ScrollAnimatedElement({ children, animation = 'fade', delay = 0 }: ScrollAnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    bounce: `transition-all duration-700 ${isVisible ? 'animate-bounce' : 'opacity-0 translate-y-10'}`,
    wave: `transition-all duration-500 ${isVisible ? 'animate-pulse' : 'opacity-0 scale-95'}`,
    wiggle: `transition-all duration-600 ${isVisible ? 'animate-pulse' : 'opacity-0 rotate-3'}`,
    fade: `transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
  };

  return (
    <div ref={elementRef} className={animationClasses[animation]}>
      {children}
    </div>
  );
}

export function WigglyLine() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 0.1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg width="200" height="4" className="mx-auto my-8">
      <path
        d={`M 0 2 Q 50 ${2 + Math.sin(offset) * 2} 100 2 T 200 2`}
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
