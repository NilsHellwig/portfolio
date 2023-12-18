import { X } from "phosphor-react";
import React, { ReactNode } from "react";

interface ModalProps {
  onOpen: () => void;
  className?: string; // Neue Option für CSS-Klassen
  children: ReactNode;
}

interface ModalContentProps {
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onOpen, className, children }) => {
  return (
    <div className={` ${className}`} onClick={onOpen}>
      {children}
    </div>
  );
};

export const ModalContent: React.FC<ModalContentProps> = ({ onClose, children }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-auto bg-opacity-60 bg-black backdrop-blur-sm p-4" onClick={onClose}>
      <span className="absolute top-4 right-4 text-white cursor-pointer">
        <X size={24} weight="bold" />
      </span>
      <div className="flex items-center h-full justify-center">
        {children}
      </div>
    </div>
  );
};
