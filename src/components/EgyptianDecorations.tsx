
import React from 'react';

interface DecorationProps {
  position?: "top" | "bottom" | "left" | "right";
}

export const PyramidDecoration: React.FC<DecorationProps> = ({ position = "bottom" }) => {
  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    left: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`absolute z-10 ${positionClasses[position]}`}>
      <div className="w-24 h-24 relative">
        <div className="absolute inset-0 bg-egyptian-gold opacity-70" 
          style={{ 
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))"
          }}>
        </div>
      </div>
    </div>
  );
};

export const HieroglyphicsBar: React.FC<DecorationProps> = ({ position = "top" }) => {
  const positionClasses = {
    top: "top-0 inset-x-0",
    bottom: "bottom-0 inset-x-0",
    left: "left-0 inset-y-0 flex-col",
    right: "right-0 inset-y-0 flex-col",
  };

  const hieroglyphs = "☥ ⏣ 𓁹 𓂀 𓃀 𓆓 𓇋 𓈖 𓅱 𓊪 𓋴 𓍿 𓎛 𓏲 𓐍";

  return (
    <div className={`absolute ${positionClasses[position]} flex justify-center items-center bg-egyptian-gold bg-opacity-30 py-2 text-egyptian-black text-lg overflow-hidden whitespace-nowrap`}>
      <div className="animate-[scroll_20s_linear_infinite]">
        {hieroglyphs.repeat(5)}
      </div>
    </div>
  );
};

export const AnkhSymbol: React.FC<DecorationProps> = ({ position = "right" }) => {
  const positionClasses = {
    top: "top-8 right-8",
    bottom: "bottom-8 right-8",
    left: "top-8 left-8",
    right: "top-8 right-8",
  };
  
  return (
    <div className={`absolute ${positionClasses[position]} text-egyptian-gold text-5xl animate-glow`}>
      ☥
    </div>
  );
};

export const EyeOfHorus: React.FC<DecorationProps> = ({ position = "left" }) => {
  const positionClasses = {
    top: "top-8 left-8",
    bottom: "bottom-8 left-8",
    left: "top-8 left-8",
    right: "top-8 right-8",
  };
  
  return (
    <div className={`absolute ${positionClasses[position]} text-egyptian-gold text-5xl animate-glow`}>
      𓂀
    </div>
  );
};

export const SandAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-sand-pattern opacity-30"></div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-egyptian-sand to-transparent"></div>
    </div>
  );
};
