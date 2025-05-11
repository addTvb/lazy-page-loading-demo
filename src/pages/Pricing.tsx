import React from 'react';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const Pricing: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Базовый",
      price: "от 50 000 ₽",
      description: "Идеально для малого бизнеса и стартапов",
      features: [
        "До 5 страниц",
        "Адаптивный дизайн",
        "Базовая SEO-оптимизация",
        "Контактная форма",
        "3 месяца технической поддержки"
      ]
    },
    {
      id: 2,
      name: "Стандарт",
      price: "от 150 000 ₽",
      description: "Оптимальное решение для развивающегося бизнеса",
      features: [
        "До 15 страниц",
        "Уникальный дизайн",
        "Расширенная SEO-оптимизация",
        "Интеграция с CRM",
        "Система управления контентом",
        "Мультиязычность",
        "6 месяцев технической поддержки"
      ],
      isPopular: true
    },
    {
      id: 3,
      name: "Премиум",
      price: "от 350 000 ₽",
      description: "Комплексное решение для крупного бизнеса",
      features: [
        "Неограниченное количество страниц",
        "Индивидуальный дизайн",
        "Полная SEO-оптимизация",
        "Интеграция с любыми системами",
        "Расширенная аналитика",
        "Высокопроизводительный хостинг",
        "Персональный менеджер",
        "12 месяцев технической поддержки"
      ]
    }
  ];

  return (
    <div className="page pricing-page">
      <h1>Тарифы и услуги</h1>
      
      <p className="pricing-intro">
        Мы предлагаем различные тарифные планы, которые можно адаптировать под ваши потребности. 
        Свяжитесь с нами для получения индивидуального предложения.
      </p>
      
      <div className="pricing-grid">
        {pricingPlans.map(plan => (
          <div 
            key={plan.id} 
            className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
          >
            {plan.isPopular && <div className="popular-badge">Популярный</div>}
            <h2 className="plan-name">{plan.name}</h2>
            <div className="plan-price">{plan.price}</div>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan-btn">Выбрать план</button>
          </div>
        ))}
      </div>
      
      <section className="custom-solutions">
        <h2>Индивидуальные решения</h2>
        <p>
          Нужно что-то особенное? Мы разработаем индивидуальное решение, 
          соответствующее вашим уникальным требованиям и бюджету.
        </p>
        <button className="contact-btn">Связаться с нами</button>
      </section>
    </div>
  );
};

export default Pricing; 