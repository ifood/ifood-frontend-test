import React from 'react';

interface Link {
  href: string,
  className?: string
}

export const Link: React.FC<Link> = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);
