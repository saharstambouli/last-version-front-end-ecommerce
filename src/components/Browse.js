import React from 'react';

const Browse = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Title and Paragraph */}
      <h1 className="text-4xl font-bold mb-4">Browse Our Collection</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Explore our diverse range of products tailored just for you. Discover new styles and trends that match your taste!
      </p>

      {/* Images with Titles */}
      <div className="flex space-x-4">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <img 
            src="/P12.png" 
            alt="Bedroom" 
            className="w-1/2 h-auto object-cover "
          />
          <p className="mt-2 text-lg font-semibold">Bedroom</p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <img 
            src="/P11.png" 
            alt="Dining" 
            className="w-1/2 h-auto object-cover"
          />
          <p className="mt-2 text-lg font-semibold">Dining</p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <img 
            src="P15.png" 
            alt="Living" 
            className="w-1/2 h-auto object-cover"
          />
          <p className="mt-2 text-lg font-semibold">Living</p>
        </div>
      </div>
    </div>
  );
}

export default Browse;
