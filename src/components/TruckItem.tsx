
import React from 'react';
import { Truck, getVehicleUrlPrefix } from '@/models/TruckTypes';
import { Badge } from '@/components/ui/badge';
import { useCompare } from '@/contexts/CompareContextAstro';
import { GitCompare } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface TruckItemProps {
  truck: Truck;
}

const TruckItem = ({ truck }: TruckItemProps) => {
  const vehicleUrlPrefix = getVehicleUrlPrefix(truck.type);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const { addToCompare, removeFromCompare, isInCompare, compareItems } = useCompare();

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('TruckItem: handleToggleCompare clicked for:', truck.name);

    if (isInCompare(truck.id)) {
      console.log('TruckItem: Removing from compare');
      removeFromCompare(truck.id);
    } else {
      console.log('TruckItem: Adding to compare');
      addToCompare(truck);

      if (compareItems.length >= 1) {
        setTimeout(() => {
          const shouldNavigate = window.confirm('Bạn đã thêm xe vào danh sách so sánh. Bạn có muốn đi đến trang so sánh ngay bây giờ không?');
          if (shouldNavigate) {
            window.location.href = '/so-sanh-xe';
            window.scrollTo(0, 0);
          }
        }, 300);
      }
    }
  };

  // Hàm để hiển thị thương hiệu - hỗ trợ mảng thương hiệu
  const renderBrands = () => {
    if (Array.isArray(truck.brand)) {
      return truck.brand.join(' • ');
    }
    return truck.brand;
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
      <div className="relative">
        <a href={`/${vehicleUrlPrefix}/${truck.slug}`} onClick={() => window.scrollTo(0, 0)}>
          <OptimizedImage 
            src={truck.thumbnailUrl} 
            alt={truck.name} 
            className="w-full h-48 object-contain bg-gray-50"
            useCase="thumbnail"
          />
        </a>
        
        {/* Nút so sánh với icon luôn hiển thị và văn bản chỉ hiển thị khi hover */}
        {isClient && (
          <button
            onClick={handleToggleCompare}
            className={`
              absolute bottom-2 right-2
              flex items-center justify-center gap-1
              py-1 rounded
              transition-all duration-300
              ${isInCompare(truck.id)
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white/80 hover:bg-white border border-gray-200 text-gray-700 hover:text-blue-600'
              }
              shadow-md hover:shadow-lg
            `}
            title={isInCompare(truck.id) ? "Đã thêm vào so sánh" : "Thêm vào so sánh"}
            aria-label={isInCompare(truck.id) ? "Đã thêm vào so sánh" : "Thêm vào so sánh"}
          >
            <GitCompare className="h-5 w-5" style={{color: isInCompare(truck.id) ? 'white' : '#ef4444'}} />
            <span className={`text-xs font-medium transition-all duration-300 max-w-0 overflow-hidden whitespace-nowrap hover:max-w-[80px] group-hover:max-w-[80px] ${isInCompare(truck.id) ? 'pl-0 group-hover:pl-1 hover:pl-1' : 'pl-0 group-hover:pl-1 hover:pl-1'}`}>
              {isInCompare(truck.id) ? "Đã thêm" : "So sánh"}
            </span>
          </button>
        )}
        
        <div className="absolute top-2 left-2 flex flex-wrap gap-1 max-w-[calc(100%-4rem)]">
          {truck.isNew && (
            <Badge className="bg-blue-500 hover:bg-blue-600">Mới</Badge>
          )}
          {truck.isHot && (
            <Badge className="bg-action hover:bg-action-600">Hot</Badge>
          )}
          {truck.discount && (
            <Badge className="bg-value hover:bg-value-600 text-black font-bold">-{truck.discount}%</Badge>
          )}
          {truck.specialOffer && (
            <Badge className="bg-value hover:bg-value-600 text-black font-bold">{truck.specialOffer}</Badge>
          )}
        </div>

        {truck.stock && truck.stock <= 3 && (
          <div className="absolute top-2 right-2 bg-action text-white text-xs px-2 py-1 rounded font-semibold shadow-md">
            Chỉ còn {truck.stock} chiếc
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div>
          <span className="text-gray-500 text-sm">
            {renderBrands()}
          </span>
          <a href={`/${vehicleUrlPrefix}/${truck.slug}`} className="group" onClick={() => window.scrollTo(0, 0)}>
            <h3 className="font-bold text-lg mb-2 hover:text-cta transition-colors line-clamp-2">
              {truck.name}
            </h3>
          </a>
        </div>
        
        <div className="mt-auto pt-4">
          <div className="text-sm text-gray-600 mb-2">
            <div className="flex justify-between mb-1">
              <span>Tải trọng:</span>
              <span className="font-medium">{truck.weightText}</span>
            </div>
            <div className="flex justify-between">
              <span>Kích thước:</span>
              <span className="font-medium">{truck.length} m</span>
            </div>
          </div>
          
          <div className="mt-2 mb-3">
            <div className="text-action font-bold text-lg">
              {truck.priceText}
            </div>
            {truck.savings && (
              <div className="text-value text-sm font-semibold mt-1">
                Tiết kiệm {truck.savings}
              </div>
            )}
          </div>

          <a
            href={`/${vehicleUrlPrefix}/${truck.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="block w-full text-center bg-cta hover:bg-cta-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Liên hệ ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default TruckItem;
