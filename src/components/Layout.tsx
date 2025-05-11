import React from 'react';  
import { Link, Outlet } from 'react-router';

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <Link to="/">CompanyLogo</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/portfolio">Портфолио</Link></li>
            <li><Link to="/blog">Блог</Link></li>
            <li><Link to="/team">Команда</Link></li>
            <li><Link to="/testimonials">Отзывы</Link></li>
            <li><Link to="/pricing">Цены</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </header>

      <main className="app-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>О компании</h3>
            <p>Мы создаем инновационные веб-решения для бизнеса с 2010 года.</p>
          </div>
          <div className="footer-section">
            <h3>Контакты</h3>
            <p>Email: info@example.com</p>
            <p>Телефон: +7 (999) 123-45-67</p>
          </div>
          <div className="footer-section">
            <h3>Социальные сети</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Company Name. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Layout;