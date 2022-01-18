import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const Portal: React.FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const root = document.body;
    ref.current = document.createElement('div');
    root.appendChild(ref.current);

    return () => {
      ref.current && ref.current.remove();
    };
  }, []);

  return ref.current ? createPortal(children, ref.current) : null;
};
