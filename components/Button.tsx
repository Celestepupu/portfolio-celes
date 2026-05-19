import React from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  loading?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export default function Button({
  size = 'md',
  loading = false,
  as: Tag = 'button',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${size}`,
    loading ? 'btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (Tag === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={props.disabled || loading} {...props}>
      {children}
    </button>
  );
}
