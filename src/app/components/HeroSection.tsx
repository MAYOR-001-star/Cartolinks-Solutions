import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface HeroCard {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
}

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
  const heroCards: HeroCard[] = [
    {
      title: "Introducing Motion Transfer",
      subtitle: "Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2.",
      image: "/api/placeholder/400/300",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Krea 1 - Open Beta Access",
      subtitle: "Free access to our new frontier AI image generator. Enjoy unparalleled photorealism, multi-language prompting, and ultra-high resolutions.",
      image: "/api/placeholder/400/300",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "AI Video Generator",
      subtitle: "Create stunning videos with AI. Transform your ideas into professional-quality videos with advanced AI technology and customizable templates.",
      image: "/api/placeholder/400/300",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Image Enhancement Pro",
      subtitle: "Enhance and upscale your images with cutting-edge AI. Improve resolution, remove noise, and restore old photos with professional quality.",
      image: "/api/placeholder/400/300",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${isDark ? 'bg-white' : 'bg-gray-800'}`,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="hero-swiper"
        >
          {heroCards.map((card: HeroCard, index: number) => (
            <SwiperSlide key={index}>
              <div className={`relative overflow-hidden rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} group cursor-pointer h-80`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}></div>
                <div className="relative p-8 h-full">
                  <div className="absolute top-4 right-4">
                    <button className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white transition-colors">
                      Try now
                    </button>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className={`swiper-button-prev-custom w-10 h-10 rounded-full ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-center transition-colors`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className={`swiper-button-next-custom w-10 h-10 rounded-full ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-center transition-colors`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .hero-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 1rem !important;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          opacity: 0.5 !important;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export { HeroSection };