'use client';

import { useState, useRef, useEffect } from 'react';
import CheckoutSummaryItemList from './CheckoutSummaryItemList';

const MobileCheckoutSummary: React.FC = () => {
  const [showItems, setShowItems] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showItems ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [showItems]);

  return (
    <>
      <div className="lg:hidden mb-0">
        <div
          onClick={() => setShowItems(!showItems)}
          className="flex justify-between items-center cursor-pointer select-none pb-0 mb-0"
        >
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="text-sm flex items-center gap-1">
            <span>{showItems ? 'Hide' : 'Show'}</span>
            <i className="material-icons align-middle">
              {showItems ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </i>
          </div>
        </div>
        <div
          ref={contentRef}
          role="presentation"
          aria-label="Order Summary Items"
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out mb-3"
          style={{ maxHeight: showItems ? height : '0px' }}
        >
          <div className="pt-4">
            <CheckoutSummaryItemList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCheckoutSummary;
