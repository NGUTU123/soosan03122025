import React, { useEffect, useRef } from 'react';
import { useCompare } from '@/contexts/CompareContextAstro';
import CompareTable from './CompareTable';
import CompareEmptyState from './CompareEmptyState';

interface ComparePageContentProps {
  allTrucks: any[];
}

const ComparePageContent: React.FC<ComparePageContentProps> = ({ allTrucks }) => {
  const { compareItems, loadTrucksFromUrl } = useCompare();
  const contentRef = useRef<HTMLDivElement>(null);
  const hasLoadedFromUrl = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || hasLoadedFromUrl.current) return;

    const urlParams = new URLSearchParams(window.location.search);
    const idsParam = urlParams.get('ids');

    if (idsParam && allTrucks.length > 0) {
      const truckIds = idsParam.split(',');
      const trucksToLoad = allTrucks.filter(truck => truckIds.includes(truck.id));

      if (trucksToLoad.length > 0) {
        loadTrucksFromUrl(trucksToLoad);
        hasLoadedFromUrl.current = true;
      }
    }
  }, [allTrucks]);

  useEffect(() => {
    if (contentRef.current && compareItems.length > 0) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [compareItems.length]);

  return (
    <div ref={contentRef}>
      {compareItems.length > 0 ? (
        <CompareTable trucks={compareItems} />
      ) : (
        <CompareEmptyState />
      )}
    </div>
  );
};

export default ComparePageContent;
