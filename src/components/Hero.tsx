
import React from 'react';
import { Button } from './ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <OptimizedImage
          src="https://tongkhoxetai.vn/upload/images/banner-xe-tai.jpg"
          alt="Các loại phương tiện thương mại"
          className="w-full h-full object-cover opacity-30"
          useCase="hero"
          lazy={false}
        />
      </div>
      <div className="container mx-auto relative z-10 flex-1 flex items-center py-8">
        <div className="max-w-3xl w-full">
          <div className="mb-3">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-primary-400/30">
              Nhà sản xuất uy tín
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
            Chuyên Sản Xuất <span className="text-primary-400">Sơ Mi Rơ Mooc</span>,
            <span className="text-primary-400"> Xe Cẩu</span> &
            <span className="text-primary-400"> Xe Tải Thùng Đông Lạnh</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-100 leading-relaxed">
            Sản xuất và cung cấp các dòng <strong>sơ mi rơ mooc</strong> từ 3 trục, mooc ben, mooc xitec,
            <strong> xe cẩu Soosan</strong> từ 3-15 tấn, và <strong>xe tải thùng đông lạnh</strong>
            chất lượng cao. Giá cạnh tranh, bảo hành toàn diện.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-primary-400">100+</div>
              <div className="text-xs md:text-sm text-gray-300 mt-1">Sơ Mi Rơ Mooc</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-primary-400">50+</div>
              <div className="text-xs md:text-sm text-gray-300 mt-1">Xe Cẩu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-primary-400">200+</div>
              <div className="text-xs md:text-sm text-gray-300 mt-1">Xe Tải Đông Lạnh</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-700 text-white font-medium text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg hover:shadow-xl transition-all">
              <a href="/danh-muc-xe">Xem danh mục sản phẩm</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-900 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 transition-all">
              <a href="/lien-he">Liên hệ báo giá ngay</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-8 flex justify-center">
        <button
          onClick={scrollToContent}
          className="group flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all"
          aria-label="Cuộn xuống để xem thêm"
        >
          <span className="text-sm font-medium">Khám phá sản phẩm</span>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
