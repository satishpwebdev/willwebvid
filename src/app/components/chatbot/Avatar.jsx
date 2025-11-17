'use client'

import { useEffect, useState } from 'react';


const Avatar = ({ size = 'medium' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const favicon = '/awards/fav.png';
  
  useEffect(() => {
    const img = new Image();
    img.src = favicon;
    img.onload = () => setIsLoaded(true);
  }, []);

  const sizeClasses = {
    tiny: 'w-5 h-5',
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-white flex items-center justify-center`}>
      {isLoaded ? (
        <img 
          src={favicon} 
          alt="Willo Avatar" 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`${sizeClasses[size]} bg-willo-light animate-pulse rounded-full`}></div>
      )}
    </div>
  );
};

export default Avatar;
