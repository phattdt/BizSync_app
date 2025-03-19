import { ReactNode } from "react";
export const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-lg shadow-lg p-4 bg-white ${className || ''}`}>{children}</div>
);

export const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`p-4 ${className || ''}`}>{children}</div>
);