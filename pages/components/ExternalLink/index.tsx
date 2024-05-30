import React from 'react';

interface ExternalLinkProps extends React.PropsWithChildren {
  className?: string,
  href: string,
}

function ExternalLink({
  children,
  className,
  href,
}: ExternalLinkProps) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

export default ExternalLink;
