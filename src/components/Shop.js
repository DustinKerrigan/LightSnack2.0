import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        name: 'Original Cotton Tee',
        description: 'Lightweight and breathable, perfect for workouts.',
        price: '$22.00',
        image: 'whiteShort.png',
        link: 'https://buy.stripe.com/fZe2b68h322x6B25kk',
        status: 'Available',
        imageStyle: 'scale-75'
    },
    {
        name: '"Frat" Black Edition',
        description: 'Classic black with Light Snack logo.',
        price: '$22.00',
        image: 'blackCotton.png',
        link: 'https://buy.stripe.com/4gwg1WcxjfTn9Ne8wy',
        status: 'Available',
        imageStyle: 'scale-75'
    },
    {
        name: 'Performance Black Short-Sleeve',
        description: 'Clean white performance wear.',
        price: '$24.00',
        image: 'blackPerformance.png',
        link: 'https://buy.stripe.com/4gweXSdBn9uZ3oQbIL',
        status: 'Available',
        imageStyle: 'scale-75'
    },
    {
        name: 'Performance White Short-Sleeve',
        description: 'Neutral tone with breathable fabric.',
        price: '$24.00',
        image: 'whiteShort.png',
        link: '/shop',
        status: 'Available',
        imageStyle: 'scale-75'
    },
    {
        name: 'Performance Black Long-Sleeve',
        description: 'Cozy hoodie with Light Snack logo.',
        price: '$25.00',
        image: 'blackLong.png',
        link: 'https://buy.stripe.com/14k7vqgNz22x6B2004',
        status: 'Available',
        imageStyle: 'scale-75'
    },
    {
        name: 'Performance White Long-Sleeve',
        description: 'Classic fit with Light Snack embroidery.',
        price: '$25.00',
        image: 'whiteLong.png',
        link: '/shop',
        status: 'Available',
        imageStyle: 'scale-75'
    },
];

const Shop = () => {
    const navigate = useNavigate();
    const availableProducts = products.filter((item) => item.status !== 'SOLD OUT');
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/modernLogo.PNG')",
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />
      <div className="relative z-10 min-h-screen">
        {/*back buttons*/}
        <div className="flex justify-between items-center px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="bg-red-600 hover:bg-red-700 text-white font-bebas py-2 px-4 rounded-lg shadow transition"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-black hover:text-red-600 transition text-xl"
          >
            <img src="homeLogo2.png" alt="Cart" className="w-11 h-11"/>
          </button>
        </div>

        <h1 className="text-4xl font-bebas text-black text-center mb-10">Shop Our Gear</h1>

        {/*products*/}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-red-600"
            >
              <div className="w-full h-56 flex items-center justify-center bg-white">
              <img
                src={item.image}
                alt={item.name}
                className={`object-contain h-48 w-48 ${item.imageStyle || 'scale-90'}`}
              />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-red-600 font-bold">{item.price}</p>
                <button
                  onClick={() => window.open(item.link, '_blank')}
                  className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
