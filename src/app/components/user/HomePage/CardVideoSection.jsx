import React from 'react';

const CardVideoSection = () => {
  return (
    <div className='mt-32'>
      <h1 className='text-5xl font-bold my-10 text-center'>India's most ambitious car booking website</h1>
      <div>
        <iframe
          width="100%"
          height="600"  // Set height as needed
          src="https://www.youtube.com/embed/7HaJArMDKgI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default CardVideoSection;
