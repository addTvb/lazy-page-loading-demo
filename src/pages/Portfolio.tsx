import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="page portfolio-page">
      <h1>Наше портфолио</h1>
      <p className="intro">
        За годы работы мы реализовали множество проектов различной сложности и масштаба. 
        Ниже представлены некоторые из наших работ, демонстрирующие наш опыт и экспертизу в различных областях.
      </p>
      
      <div className="portfolio-filters">
        <button className="filter-btn active">Все проекты</button>
        <button className="filter-btn">Веб-разработка</button>
        <button className="filter-btn">Мобильные приложения</button>
        <button className="filter-btn">Дизайн</button>
        <button className="filter-btn">E-commerce</button>
        <button className="filter-btn">Корпоративные системы</button>
      </div>
      
      <div className="portfolio-grid">
        {/* Проект 1 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Интернет-магазин "ЭкоМаркет"</h2>
            <p className="category">E-commerce, Веб-разработка</p>
            <p className="description">
              Разработка современного интернет-магазина экологически чистых продуктов с интегрированной системой доставки и программой лояльности.
            </p>
            <div className="technologies">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">Stripe API</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Увеличение онлайн-продаж на 45%, снижение стоимости привлечения клиента на 30%.</p>
            </div>
          </div>
        </div>
        
        {/* Проект 2 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Мобильное приложение "ФитТрекер"</h2>
            <p className="category">Мобильные приложения, Здоровье</p>
            <p className="description">
              Разработка кроссплатформенного приложения для отслеживания физической активности, питания и сна с персонализированными рекомендациями.
            </p>
            <div className="technologies">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">HealthKit API</span>
              <span className="tech-tag">Google Fit API</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Более 500 000 загрузок, средняя оценка 4.8/5 в App Store и Google Play.</p>
            </div>
          </div>
        </div>
        
        {/* Проект 3 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Корпоративный портал "БизнесПульс"</h2>
            <p className="category">Корпоративные системы, Веб-разработка</p>
            <p className="description">
              Создание комплексной системы для автоматизации внутренних бизнес-процессов крупной логистической компании, включая модули управления персоналом, документооборота и аналитики.
            </p>
            <div className="technologies">
              <span className="tech-tag">Angular</span>
              <span className="tech-tag">Java Spring Boot</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Сокращение времени на рутинные операции на 65%, повышение эффективности работы сотрудников на 40%.</p>
            </div>
          </div>
        </div>
        
        {/* Проект 4 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Редизайн сайта "ТурГид"</h2>
            <p className="category">Дизайн, Веб-разработка</p>
            <p className="description">
              Полный редизайн и разработка туристического портала с интерактивной картой, системой бронирования и личным кабинетом пользователя.
            </p>
            <div className="technologies">
              <span className="tech-tag">Figma</span>
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">Nuxt.js</span>
              <span className="tech-tag">Mapbox API</span>
              <span className="tech-tag">Strapi CMS</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Увеличение конверсии на 35%, снижение показателя отказов на 25%, увеличение времени пребывания на сайте на 40%.</p>
            </div>
          </div>
        </div>
        
        {/* Проект 5 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Платформа онлайн-обучения "ЭдуКвест"</h2>
            <p className="category">Веб-разработка, EdTech</p>
            <p className="description">
              Разработка масштабируемой платформы для онлайн-образования с интерактивными курсами, системой тестирования и аналитикой прогресса обучения.
            </p>
            <div className="technologies">
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">WebRTC</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Более 10 000 активных пользователей, средний показатель завершения курсов 78% (на 30% выше среднего по отрасли).</p>
            </div>
          </div>
        </div>
        
        {/* Проект 6 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Приложение для умного дома "СмартХаус"</h2>
            <p className="category">Мобильные приложения, IoT</p>
            <p className="description">
              Разработка экосистемы приложений для управления устройствами умного дома с поддержкой различных протоколов и интеграцией с голосовыми помощниками.
            </p>
            <div className="technologies">
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">Dart</span>
              <span className="tech-tag">MQTT</span>
              <span className="tech-tag">Google Assistant API</span>
              <span className="tech-tag">Alexa Skills Kit</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Интеграция с более чем 200 типами устройств, снижение энергопотребления в домах пользователей в среднем на 20%.</p>
            </div>
          </div>
        </div>
        
        {/* Проект 7 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Система аналитики "БизнесИнсайт"</h2>
            <p className="category">Корпоративные системы, Аналитика</p>
            <p className="description">
              Разработка комплексной системы бизнес-аналитики для сети розничных магазинов с визуализацией данных, прогнозной аналитикой и автоматическими отчетами.
            </p>
            <div className="technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Django</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">D3.js</span>
              <span className="tech-tag">TensorFlow</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Повышение точности прогнозирования спроса на 35%, оптимизация товарных запасов, сокращение издержек на 15%.</p>
            </div>
          </div>
        </div>
        
        {/* Проект 8 */}
        <div className="portfolio-item">
          <div className="portfolio-image">
            <div className="image-placeholder">Изображение проекта</div>
          </div>
          <div className="portfolio-details">
            <h2>Финансовое приложение "ФинПланер"</h2>
            <p className="category">Мобильные приложения, Финтех</p>
            <p className="description">
              Разработка приложения для управления личными финансами с функциями бюджетирования, инвестиционного портфеля и финансовых целей.
            </p>
            <div className="technologies">
              <span className="tech-tag">Swift</span>
              <span className="tech-tag">Kotlin</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Plaid API</span>
            </div>
            <div className="results">
              <p><strong>Результаты:</strong> Более 200 000 активных пользователей, средний рост накоплений пользователей на 27% за 6 месяцев использования.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="testimonial-highlight">
        <blockquote>
          "Команда продемонстрировала высочайший уровень профессионализма и технической экспертизы. Проект был выполнен в срок и полностью соответствовал нашим требованиям. Мы продолжаем сотрудничество и рекомендуем их как надежного технологического партнера."
        </blockquote>
        <cite>— Алексей Соколов, Директор по цифровой трансформации, ООО "ТехноПрогресс"</cite>
      </div>
      
      <section className="cta-section">
        <h2>Готовы обсудить ваш проект?</h2>
        <p>Свяжитесь с нами, чтобы получить бесплатную консультацию и оценку стоимости работ.</p>
        <button className="cta-button">Связаться с нами</button>
      </section>
    </div>
  );
};

export default Portfolio; 