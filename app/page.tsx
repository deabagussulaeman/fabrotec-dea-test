'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setData(response?.data?.products || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length > 0 ? data.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
              <Image
                src={product.images ? product.images[0] : "https://via.placeholder.com/200"}
                alt="image"
                className="w-full h-64 object-cover mb-4"
                width={100}
                height={100}
                priority
              />

              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-green-600 font-semibold">${product.price}</p>
            </div>            
          )) : 'Loading...'}
        </div>
      </div>
    </main>
  )
}