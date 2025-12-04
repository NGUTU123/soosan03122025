import React from 'react';
import { CompareProvider } from '@/contexts/CompareContextAstro';
import ComparePageContent from './ComparePageContent';

const ComparePageWithProvider: React.FC = () => {
  return (
    <CompareProvider>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">So Sánh Xe</h1>
        <p className="text-center text-gray-600 mb-12">
          Chọn tối đa 3 xe để so sánh chi tiết thông số kỹ thuật và giá cả
        </p>

        <ComparePageContent />
      </div>
    </CompareProvider>
  );
};

export default ComparePageWithProvider;
