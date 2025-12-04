import React from 'react';
import { useCompare } from '@/contexts/CompareContextAstro';
import CompareTable from './CompareTable';
import CompareEmptyState from './CompareEmptyState';

const ComparePageContent: React.FC = () => {
  const { compareItems } = useCompare();

  React.useEffect(() => {
    console.log('ComparePageContent: compareItems changed', compareItems);
  }, [compareItems]);

  console.log('ComparePageContent render, items count:', compareItems.length);

  return (
    <div>
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <strong>Debug:</strong> Số xe trong danh sách so sánh: {compareItems.length}
        {compareItems.length > 0 && (
          <div className="mt-2">
            <ul className="list-disc pl-5">
              {compareItems.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {compareItems.length > 0 ? (
        <CompareTable trucks={compareItems} />
      ) : (
        <CompareEmptyState />
      )}
    </div>
  );
};

export default ComparePageContent;
