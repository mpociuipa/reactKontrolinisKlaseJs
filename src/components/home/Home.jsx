import React from 'react';


const Home = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  return (
    <div>
      <h1>Labas Home</h1>
      <p>Šiandienos data: {formattedDate}</p>
    </div>
  );
};

export default Home;
