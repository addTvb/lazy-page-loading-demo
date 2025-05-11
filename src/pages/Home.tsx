import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="page home-page">
      <h1>Главная страница</h1>
      <section className="hero-section">
        <h2>Добро пожаловать на наш сайт</h2>
        <p>Это демонстрация работы с React Router и ленивой загрузкой компонентов.</p>
      </section>
      
      <section className="features">
        <div className="feature">
          <h3>React Router</h3>
          <p>Современная маршрутизация для React приложений</p>
        </div>
        <div className="feature">
          <h3>Lazy Loading</h3>
          <p>Оптимизация загрузки страниц с помощью React.lazy</p>
        </div>
        <div className="feature">
          <h3>Suspense</h3>
          <p>Отображение состояния загрузки компонентов</p>
        </div>
      </section>
      
      <section className="cta">
        <h2>Начните изучение сегодня</h2>
        <p>Переходите по ссылкам в навигации, чтобы увидеть разные страницы в действии.</p>
      </section>
    </div>
  );
};

export default Home; 