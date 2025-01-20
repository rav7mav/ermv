import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white rounded-t-[100px] py-16 mt-12">
      <div className="container mx-auto flex flex-col items-center text-center text-pretty">
        <h2 className="text-5xl font-bold mb-4 text-purple-600">О нас</h2>
        <p className="text-3xl max-w-[800px]">Мы предлагаем лучшие экскурсии по Москве, чтобы познакомить вас с историей и культурой нашего города.</p>
      </div>
    </section>
  );
};

export default About;
