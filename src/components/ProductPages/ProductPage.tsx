'use client';

import { useEffect, useState } from 'react';
import Navbar from '../Nav/Navbar';
import ShoeGrid from './ShoeGrid';
import { mockData } from '../../data/MockData';
import LoadingSpinner from '../LoadingSpinner';
import { Shoe } from '../../types/index';

interface ProductPageProps {
  category: string;
}

const ProductPage = ({ category }: ProductPageProps) => {
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchShoes = () => {
      setLoading(true);
      setTimeout(() => {
        const fetchedShoes = mockData[category];
        setShoes(fetchedShoes);
        setLoading(false);
      }, 200);
    };

    fetchShoes();
  });

  return (
    <>
      <Navbar />
      <header className="text-center my-4">
        <h1 className="text-white text-3xl font-semibold">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </header>

      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ minHeight: 'calc(100vh - 20rem)' }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <ShoeGrid shoes={shoes} />
      )}
    </>
  );
};

export default ProductPage;
