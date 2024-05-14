
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Store {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}

const stores: Store[] = [
  {
    name: 'Funky Shirty',
    description: 'This is the first store',
    url: 'https://Funkyshirty.com',
    imageUrl: 'funky.png'
  },
  {
    name: 'Emotionnect',
    description: 'This is the second store',
    url: 'https://emotionnect.com',
    imageUrl: 'emotionconnect.png'
  },
];

const Stores: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="stores" className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Stores</h1>
      <Slider {...settings}>
        {stores.map((store, index) => (
          <div key={index} className="text-center">
            <img src={store.imageUrl} alt={store.name} className="mx-auto w-full mb-4 h-96 object-cover lg:object-fit rounded-md" />
            <h2 className="text-2xl font-semibold text-gray-800">{store.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{store.description}</p>
            <a
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Visit Store
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Stores;
