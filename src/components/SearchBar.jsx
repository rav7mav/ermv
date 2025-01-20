import React from 'react';

const SearchBar = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <input type="text" placeholder="Ищите экскурсию..." className="px-4 py-2 border rounded-full w-1/2" />
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full ml-4">Поиск</button>
      </div>
    </section>
  );
};

export default SearchBar;