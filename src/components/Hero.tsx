
import React from 'react';
import { Button } from './ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <OptimizedImage 
          src="https://tongkhoxetai.vn/upload/images/banner-xe-tai.jpg" 
          alt="Các loại phương tiện thương mại" 
          className="w-full h-full object-cover opacity-30"
          useCase="hero"
          lazy={false}
        />
      </div>
      <div className="container mx-auto relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary-400/30">
              Đại lý chính hãng uy tín
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Chuyên Cung Cấp <span className="text-primary-400">Sơ Mi Rơ Mooc</span>,
            <span className="text-primary-400"> Xe Cẩu</span> &
            <span className="text-primary-400"> Xe Tải Thùng Đông Lạnh</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            Nhập khẩu và phân phối các dòng <strong>sơ mi rơ mooc</strong> từ 3 trục, mooc ben, mooc xitec,
            <strong> xe cẩu Soosan</strong> từ 3-15 tấn, và <strong>xe tải thùng đông lạnh</strong>
            chất lượng cao. Giá cạnh tranh, bảo hành toàn diện.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-primary-400">100+</div>
              <div className="text-sm text-gray-300 mt-1">Sơ Mi Rơ Mooc</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-primary-400">50+</div>
              <div className="text-sm text-gray-300 mt-1">Xe Cẩu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-primary-400">200+</div>
              <div className="text-sm text-gray-300 mt-1">Xe Tải Đông Lạnh</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-700 text-white font-medium text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              <a href="/danh-muc-xe">Xem danh mục sản phẩm</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 transition-all">
              <a href="/lien-he">Liên hệ báo giá ngay</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
