
import React from 'react';

interface PageHeaderProps {
  title: string;
  accent?: string;
}

export default function PageHeader({ title, accent }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="section-heading">
        {title}
        {accent && <span className="accent">{accent}</span>}
      </h1>
    </div>
  );
}
