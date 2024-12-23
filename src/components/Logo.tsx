import { Command } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Command className="w-8 h-8 text-secondary" />
      <span className="text-2xl font-bold text-primary">KilreTech</span>
    </div>
  );
};