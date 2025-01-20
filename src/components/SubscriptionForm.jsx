import React from 'react';

const SubscriptionForm = () => {
  return (
    <section className="bg-blue-600 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Подпишитесь на новости</h2>
        <input type="email" placeholder="Ваш email" className="px-4 py-2 rounded-lg mb-4" />
        <div>
          <input type="checkbox" id="privacy" className="mr-2" />
          <label htmlFor="privacy">Согласен на обработку данных</label>
        </div>
        <button className="mt-4 bg-white text-blue-600 py-2 px-6 rounded-full">Подписаться</button>
      </div>
    </section>
  );
};

export default SubscriptionForm;