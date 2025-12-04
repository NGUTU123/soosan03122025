import React from 'react';
import { CompareProvider } from '@/contexts/CompareContextAstro';
import CatalogPage from './CatalogPage';
import CatalogHeader from './CatalogHeader';
import { Truck } from '@/models/TruckTypes';

interface CatalogPageWithProviderProps {
  initialVehicles: Truck[];
  initialVehicleCount: number;
  initialSearchQuery?: string;
}

const CatalogPageWithProvider: React.FC<CatalogPageWithProviderProps> = ({
  initialVehicles,
  initialVehicleCount,
  initialSearchQuery
}) => {
  return (
    <CompareProvider>
      <div className="container mx-auto px-4 py-8">
        <CatalogHeader initialVehicleCount={initialVehicleCount} />
        <CatalogPage initialVehicles={initialVehicles} initialSearchQuery={initialSearchQuery} />
      </div>
    </CompareProvider>
  );
};

export default CatalogPageWithProvider;
