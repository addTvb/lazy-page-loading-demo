import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "Как долго занимает разработка веб-сайта?",
      answer: "Сроки разработки зависят от сложности проекта. Простой сайт-визитка может быть готов за 2-3 недели, в то время как сложные веб-приложения могут потребовать от 2 до 6 месяцев разработки."
    },
    {
      question: "Какие технологии вы используете?",
      answer: "Мы используем современный стек технологий, включая React, Angular, Vue.js для фронтенда, Node.js, Python, PHP для бэкенда, а также различные базы данных и облачные сервисы в зависимости от требований проекта."
    },
    {
      question: "Сколько стоит разработка мобильного приложения?",
      answer: "Стоимость разработки мобильного приложения зависит от его функциональности, сложности дизайна и платформ, для которых оно разрабатывается. Мы предоставляем детальную оценку после анализа требований."
    },
    {
      question: "Предоставляете ли вы поддержку после запуска проекта?",
      answer: "Да, мы предлагаем различные пакеты технической поддержки и сопровождения проектов после их запуска. Это включает мониторинг, обновления, исправление ошибок и добавление новых функций."
    },
    {
      question: "Можете ли вы обновить существующий сайт?",
      answer: "Да, мы предоставляем услуги по модернизации и обновлению существующих веб-сайтов и приложений, включая редизайн, оптимизацию производительности и добавление новой функциональности."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="page faq-page">
      <h1>Часто задаваемые вопросы</h1>
      
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>
              <span className="toggle-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="contact-cta">
        <h2>Не нашли ответ на свой вопрос?</h2>
        <p>Свяжитесь с нами, и мы с радостью ответим на все ваши вопросы.</p>
        <button className="contact-btn">Связаться с нами</button>
      </div>
    </div>
  );
};

export default FAQ; 