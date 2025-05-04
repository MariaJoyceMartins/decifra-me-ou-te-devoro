
import React, { useState, useEffect } from 'react';

interface SphinxProps {
  isDevourMode: boolean;
  isCorrect: boolean | null;
}

const Sphinx: React.FC<SphinxProps> = ({ isDevourMode, isCorrect }) => {
  const [animation, setAnimation] = useState<string>('animate-float');
  
  useEffect(() => {
    if (isDevourMode) {
      setAnimation('animate-devour');
      const timer = setTimeout(() => {
        setAnimation('animate-float');
      }, 500);
      return () => clearTimeout(timer);
    }
    
    if (isCorrect === true) {
      setAnimation('animate-fadeIn');
    }
  }, [isDevourMode, isCorrect]);

  return (
    <div className="flex justify-center items-center my-8">
      <div 
        className={`relative w-64 h-64 md:w-80 md:h-80 ${animation} transition-all duration-500`} 
        style={{ minHeight: '250px' }}
      >
        <div className="sphinx-body absolute inset-0 flex flex-col justify-center items-center">
          {/* Sphinx Head */}
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <div className="absolute bottom-0 left-0 right-0 bg-egyptian-gold h-24 md:h-32 rounded-t-full">
              {/* Face */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-24 md:w-36 md:h-28 bg-egyptian-sand rounded-t-lg">
                {/* Eyes */}
                <div className="absolute top-8 left-6 w-4 h-6 md:w-6 md:h-8 bg-egyptian-black rounded-full"></div>
                <div className="absolute top-8 right-6 w-4 h-6 md:w-6 md:h-8 bg-egyptian-black rounded-full"></div>
                
                {/* Mouth - changes based on state */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-${isDevourMode ? '6' : '2'} md:w-16 md:h-${isDevourMode ? '8' : '2'} bg-egyptian-black rounded-full transition-all duration-300`}></div>
              </div>
              
              {/* Headdress */}
              <div className="absolute top-0 left-0 w-full h-4 bg-egyptian-red"></div>
              <div className="absolute top-4 left-0 w-full h-2 bg-egyptian-black"></div>
            </div>
          </div>
          
          {/* Sphinx Body */}
          <div className="relative w-64 h-40 md:w-80 md:h-48 bg-egyptian-gold rounded-lg mt-[-10px]">
            <div className="absolute bottom-0 left-2 w-12 h-16 md:w-16 md:h-20 bg-egyptian-gold rounded-lg transform rotate-45"></div>
            <div className="absolute bottom-0 right-2 w-12 h-16 md:w-16 md:h-20 bg-egyptian-gold rounded-lg transform -rotate-45"></div>
          </div>
        </div>

        {/* Hieroglyphics as decoration */}
        <div className="absolute -bottom-8 left-0 right-0 text-center text-egyptian-gold text-2xl">
          ☥ ⏣ 𓁹 𓂀 𓃀 𓆓 𓇋 𓈖 𓅱 𓊪 ☥
        </div>
      </div>
    </div>
  );
};

export default Sphinx;
