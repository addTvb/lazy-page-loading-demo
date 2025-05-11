import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="page contact-page">
      <h1>Свяжитесь с нами</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Контактная информация</h2>
          <ul>
            <li>
              <strong>Адрес:</strong> г. Москва, ул. Примерная, д. 123
            </li>
            <li>
              <strong>Телефон:</strong> +7 (999) 123-45-67
            </li>
            <li>
              <strong>Email:</strong> info@example.com
            </li>
            <li>
              <strong>Время работы:</strong> Пн-Пт, 9:00 - 18:00
            </li>
          </ul>
        </div>
        
        <form className="contact-form">
          <h2>Форма обратной связи</h2>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Тема</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 