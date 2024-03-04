import React from 'react';
import lemonadeImage from '../assets/lemonadeai.webp';

const Home = () => {
  console.log("Home rendered");
  return  <div className="flex flex-col md:flex-row items-center justify-around bg-yellow-50 py-12 px-4 md:px-12">
  <div className="md:w-1/2 mb-8 md:mb-0">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Refreshing Homemade Lemonade</h1>
    <p className="text-gray-700 text-lg mb-4">
      Dive into the world of refreshment with our homemade lemonade, crafted from freshly squeezed lemons and a perfect blend of sweetness. Whether you're enjoying a sunny day or looking for a burst of freshness, our lemonade is the perfect choice.
    </p>
    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
  </div>
  <div className="md:w-1/2 flex justify-center">
    <img src={lemonadeImage} alt="Refreshing Lemonade" className="max-w-sm rounded-lg shadow-lg"/>
  </div>
</div>;
};

export default Home;
