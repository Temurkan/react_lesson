import React from "react";
import { useParams } from "react-router-dom";
import mockData from "../data";

const SlugPage = () => {
  const { id } = useParams();
  let product = mockData.find((product) => product.id === id);
  return (
    <div className='grid grid-cols-2 p-6 '>
      <div>
        <div className='mt-5'>
          <img
            className='w-[550px] object-contain bg-gray-100 rounded-2xl'
            src={product.image}
            alt={`${product.brand} ${product.model}`}
          />
          <div className='w-[175px] h-[125px] flex mt-3 gap-3'>
            <img
              className='object-cover bg-gray-100 rounded-xl'
              src={product.images[0]}
              alt={`${product.brand} ${product.model}`}
            />
            <img
              className='object-cover bg-gray-100 rounded-xl'
              src={product.images[1]}
              alt={`${product.brand} ${product.model}`}
            />
            <img
              className='object-cover bg-gray-100 rounded-xl'
              src={product.images[2]}
              alt={`${product.brand} ${product.model}`}
            />
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='text-3xl font-bold mb-4'>{`${product.brand} ${product.model}`}</h2>
        <p className='text-xl text-gray-500 font-bold mb-2'>${product.price}</p>
        <p className='text-xl font-bold'>Description</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default SlugPage;
