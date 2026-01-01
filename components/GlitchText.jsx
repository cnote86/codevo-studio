'use client';
import './GlitchText.css';

export default function GlitchText({ children }) {
  return (
    <h1 
      className="glitch-text" 
      data-text={children}
    >
      {children}
    </h1>
  );
}