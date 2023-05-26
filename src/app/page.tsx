import React from 'react';

interface Perfume {
  id: number;
  brand: string;
  name: string;
  image: string;
}

const perfumes: Perfume[] = [
  {
    id: 1,
    name: 'Eros',
    brand: 'Versace',
    image: 'https://fraguru.com/mdimg/perfume/375x500.16657.jpg',
  },
  {
    id: 2,
    name: 'Sauvage',
    brand: 'Dior',
    image: 'https://fraguru.com/mdimg/perfume/375x500.31861.jpg',
  },
  {
    id: 3,
    name: 'Gentleman',
    brand: 'Givenchy',
    image: 'https://fraguru.com/mdimg/perfume/375x500.71272.jpg',
  },
  {
    id: 4,
    name: 'Le Beau',
    brand: 'Jean Paul Gaultier',
    image: 'https://fraguru.com/mdimg/perfume/375x500.72158.jpg'
  }
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Le Parfum</h1>
          <ul className="flex space-x-4 text-white">
            <li>Inicio</li>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Unisex</li>
          </ul>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar perfume..."
              className="w-48 px-4 py-2 border border-gray-300 text-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="bg-gray-900 text-white px-4 py-2 rounded-r-md">
              Buscar
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {perfumes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface PerfumeCardProps {
  perfume: Perfume;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume }) => {
  return (
    <div className="border-2  border-gray-700 p-5 rounded-md bg-white">
      <img src={perfume.image} alt={perfume.name} className="mb-2" />
      <h3 className="text-lg font-bold text-gray-900">{perfume.name}</h3>
      <h4 className="text-lg font-medium text-gray-700">{perfume.brand}</h4>
    </div>
  );
};

export default LandingPage;
