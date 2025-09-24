import { Link } from "react-router-dom";
import mockData from "../data";
import Hero from "./Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className='grid grid-cols-5 gap-3 px-6 mb-8'>
        {mockData.map(({ brand, model, price, image, description, id }) => (
          <Link to={`/product/${id}`}>
            <div key={id} className=' bg-gray-50 rounded-2xl p-5'>
              <div className='flex items-center h-54'>
                <img
                  className='object-cover object-center w-full h-full rounded-2xl'
                  src={image}
                  alt={`${brand} ${model}`}
                  draggable='false'
                />
              </div>
              <h2
                title={`${brand} ${model}`}
                className='text-lg font-bold h-14 my-2'
              >{`${brand} ${model}`}</h2>
              <p className='text-sm text-gray-500 '>${price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
