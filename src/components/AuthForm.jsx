import React from 'react';

const AuthForm = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Вход</h2>
          <input type="email" placeholder="Электронная почта" className="w-full p-3 mb-4 border border-gray-300 rounded" />
          <input type="password" placeholder="Пароль" className="w-full p-3 mb-4 border border-gray-300 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Войти</button>
          <div className="mt-4 text-center">
            <a href="#forgot-password" className="text-blue-500">Забыли пароль?</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
