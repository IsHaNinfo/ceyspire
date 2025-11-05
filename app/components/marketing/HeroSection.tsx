// components/marketing/HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          data-alt="A collage of Sri Lankan products like cinnamon sticks, tea leaves, and spices."
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnYczkGdzdj7Syw0OJtkyd4xvNz4NAn1GKT4pAn_lOsG0KbuumKG7hgKo1OjoXYLtkZWOSeYvl6gEkYq0sCuFz8gi0y-HaVgAS7DyrywexamN1bAABoJGOc8s2WveiBGUqPZIGvJOvY3XjSn4K9i23WZFiafbygFkcVRlJH_SKbFtLxWni_HNuK6AEaWPhzjWTbC5mt7dk1MWPNG1UFuzAU5Sl2U-wekgfMWYOPbafUVwD_CC2Tnc6PtFEck7KHxzx_9liJWYlXlA")' }}
        >
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Authentic Flavors of Sri Lanka
            </h1>
            <h2 className="text-white text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal max-w-xl">
              Discover premium, all-natural cinnamon, tea, and more, delivered to your door.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary hover:bg-primary/90 text-[#0d1b10] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Explore Collections</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;