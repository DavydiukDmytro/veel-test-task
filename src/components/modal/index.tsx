'use client';

import { ReactNode, useEffect } from 'react';

interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export const Modal = ({ isOpen, children }: IModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <>{isOpen && <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-3">{children}</div>}</>
  );
};
