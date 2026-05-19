import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({ children, className = '', ...props }: IconButtonProps) {
  return (
    <button className={`icon-btn ${className}`.trim()} {...props}>
      <span className="icon-btn__layer">
        <span className="icon-btn__icon">{children}</span>
      </span>
    </button>
  );
}
