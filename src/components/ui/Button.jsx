import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  hasArrow = false,
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 transform active:scale-95";
  
  const variants = {
    // Style bordure fine avec remplissage au hover (spécification CTA)
    primary: "border border-accent text-accent hover:bg-accent hover:text-white dark:text-accent dark:hover:text-black",
    filled: "bg-accent text-white hover:bg-accent-hover dark:text-black font-semibold shadow-lg shadow-accent/20",
    secondary: "border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-accent hover:text-accent",
    ghost: "text-light-text dark:text-dark-text hover:text-accent dark:hover:text-accent"
  };

  const content = (
    <>
      <span>{children}</span>
      {hasArrow && <LuArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;