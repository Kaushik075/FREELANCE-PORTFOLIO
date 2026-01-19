
'use client';

import { useState } from 'react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export default function InteractiveButton({ children, onClick, variant = 'primary', type = 'button' }: InteractiveButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 1000);
  };

  const baseClasses = "relative overflow-hidden px-8 py-3 font-medium transition-all duration-200 cursor-pointer whitespace-nowrap";
  const variantClasses = {
    primary: "bg-black text-white hover:scale-105 border-2 border-black",
    secondary: "bg-white text-black hover:scale-105 border-2 border-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute border border-black rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </button>
  );
}