export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/041593b9-c299-4123-89f4-df65fd662a6f.png" 
        alt="KilreTech Logo" 
        className="w-10 h-10" // Increased from w-8 h-8 to w-10 h-10
      />
      <span className="text-2xl font-bold text-primary">KilreTech</span>
    </div>
  );
};