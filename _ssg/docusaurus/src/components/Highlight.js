import React from 'react';

export default function SharedHighlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '10px',
        color: '#000',
        padding: '0.5rem',
      }}>
      {children}
    </span>
  );
}
