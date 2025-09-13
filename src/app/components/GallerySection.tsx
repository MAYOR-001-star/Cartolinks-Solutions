import React from "react";

interface GallerySectionProps {
  isDark: boolean;
}

const GallerySection: React.FC<GallerySectionProps> = ({ isDark }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Gallery</h2>
        <div className="flex items-center space-x-4">
          <button className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'} transition-colors`}>
            Legal
          </button>
          <button className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'} transition-colors`}>
            Pricing
          </button>
        </div>
      </div>
    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, i: number) => (
          <div key={i} className={`aspect-square rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'} overflow-hidden group cursor-pointer`}>
            <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 group-hover:scale-105 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { GallerySection };