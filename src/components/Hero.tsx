import React, { useState, useCallback, useEffect } from 'react';
import { Button } from './ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Promotion {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  badgeText?: string;
  badgeColor?: string;
}

interface Product {
  id: string;
  name: string;
  thumbnailUrl: string;
  price?: number;
  priceText?: string;
  slug: string;
  type: string;
  badgeText?: string;
}

interface HeroProps {
  promotions: Promotion[];
  featuredProducts: Product[];
}

const Hero: React.FC<HeroProps> = ({ promotions, featuredProducts }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const getBadgeColor = (color?: string) => {
    const colors: { [key: string]: string } = {
      red: 'bg-red-500 text-white',
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
      yellow: 'bg-yellow-500 text-gray-900',
      primary: 'bg-primary text-white'
    };
    return colors[color || 'primary'] || colors.primary;
  };

  const formatPrice = (price?: number, priceText?: string) => {
    if (priceText) return priceText;
    if (price) return `${(price / 1000000).toFixed(0)} triệu`;
    return 'Liên hệ';
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-[600px] lg:min-h-[700px]">
      <div className="container mx-auto py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Promotions Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
            <div className="embla h-full" ref={emblaRef}>
              <div className="embla__container flex h-full">
                {promotions.map((promo) => (
                  <div key={promo.id} className="embla__slide flex-[0_0_100%] min-w-0 relative min-h-[400px] lg:min-h-[600px]">
                    <OptimizedImage
                      src={promo.imageUrl}
                      alt={promo.title}
                      className="w-full h-full object-cover absolute inset-0"
                      useCase="hero"
                      lazy={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                    <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                      {promo.badgeText && (
                        <div className="mb-4">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getBadgeColor(promo.badgeColor)} shadow-lg`}>
                            {promo.badgeText}
                          </span>
                        </div>
                      )}

                      <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-3 drop-shadow-lg">
                        {promo.title}
                      </h2>

                      {promo.subtitle && (
                        <p className="text-xl lg:text-2xl mb-3 text-primary-300 font-semibold drop-shadow-md">
                          {promo.subtitle}
                        </p>
                      )}

                      {promo.description && (
                        <p className="text-base lg:text-lg mb-6 text-gray-200 leading-relaxed drop-shadow-md line-clamp-2">
                          {promo.description}
                        </p>
                      )}

                      {promo.ctaText && promo.ctaLink && (
                        <div>
                          <Button asChild size="lg" className="bg-primary hover:bg-primary-700 text-white font-medium shadow-xl hover:scale-105 transition-transform">
                            <a href={promo.ctaLink}>{promo.ctaText}</a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {promotions.length > 1 && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {promotions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === selectedIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 w-2 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Side - Featured Products */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-2">
                Sản Phẩm Nổi Bật
              </h2>
              <p className="text-gray-300">
                Các sản phẩm được quan tâm nhiều nhất
              </p>
            </div>

            <div className="grid gap-4 flex-1">
              {featuredProducts.slice(0, 3).map((product) => (
                <a
                  key={product.id}
                  href={`/${product.type}/${product.slug}`}
                  className="group bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all hover:shadow-xl flex"
                >
                  <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
                    <OptimizedImage
                      src={product.thumbnailUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      useCase="thumbnail"
                    />
                    {product.badgeText && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.badgeText}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="font-semibold text-base lg:text-lg mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-400 font-bold text-lg">
                        {formatPrice(product.price, product.priceText)}
                      </span>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <Button asChild size="lg" variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                <a href="/danh-muc-xe">Xem tất cả sản phẩm</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
