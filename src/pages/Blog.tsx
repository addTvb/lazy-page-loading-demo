import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="page blog-page">
      <h1>Наш блог</h1>
      <p className="blog-intro">
        Делимся опытом, знаниями и новостями из мира веб-разработки, дизайна и технологий.
      </p>
      
      <div className="blog-filters">
        <div className="search-box">
          <input type="text" placeholder="Поиск по статьям..." />
          <button>Найти</button>
        </div>
        <div className="category-filters">
          <span className="filter-label">Категории:</span>
          <button className="category-btn active">Все</button>
          <button className="category-btn">Веб-разработка</button>
          <button className="category-btn">Дизайн</button>
          <button className="category-btn">Технологии</button>
          <button className="category-btn">Бизнес</button>
        </div>
      </div>
      
      <div className="featured-post">
        <div className="post-image">
          <div className="image-placeholder">Изображение статьи</div>
        </div>
        <div className="post-content">
          <span className="post-category">Технологии</span>
          <h2>Будущее веб-разработки: тренды и прогнозы на 2023 год</h2>
          <div className="post-meta">
            <span className="post-date">15 января 2023</span>
            <span className="post-author">Автор: Иван Петров</span>
          </div>
          <p className="post-excerpt">
            В этой статье мы рассмотрим основные тренды веб-разработки, которые будут определять направление развития отрасли в ближайшем будущем. От новых JavaScript-фреймворков до инновационных подходов к дизайну пользовательских интерфейсов — узнайте, что ждет индустрию в 2023 году.
          </p>
          <a href="#" className="read-more">Читать далее</a>
        </div>
      </div>
      
      <div className="blog-grid">
        {/* Статья 1 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Веб-разработка</span>
            <h3>Оптимизация производительности React-приложений: практические советы</h3>
            <div className="post-meta">
              <span className="post-date">10 января 2023</span>
              <span className="post-author">Автор: Мария Сидорова</span>
            </div>
            <p className="post-excerpt">
              Узнайте, как улучшить производительность ваших React-приложений с помощью мемоизации, виртуализации списков и оптимизации рендеринга компонентов.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
        
        {/* Статья 2 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Дизайн</span>
            <h3>Принципы дизайн-системы: как создать масштабируемую основу для продукта</h3>
            <div className="post-meta">
              <span className="post-date">5 января 2023</span>
              <span className="post-author">Автор: Алексей Козлов</span>
            </div>
            <p className="post-excerpt">
              Рассказываем о ключевых принципах создания эффективной дизайн-системы, которая обеспечит единообразие интерфейса и ускорит процесс разработки.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
        
        {/* Статья 3 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Технологии</span>
            <h3>WebAssembly: новые возможности для веб-приложений</h3>
            <div className="post-meta">
              <span className="post-date">28 декабря 2022</span>
              <span className="post-author">Автор: Дмитрий Новиков</span>
            </div>
            <p className="post-excerpt">
              Изучаем потенциал WebAssembly для создания высокопроизводительных веб-приложений и примеры его успешного применения в реальных проектах.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
        
        {/* Статья 4 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Бизнес</span>
            <h3>Как выбрать технологический стек для стартапа: практическое руководство</h3>
            <div className="post-meta">
              <span className="post-date">20 декабря 2022</span>
              <span className="post-author">Автор: Елена Смирнова</span>
            </div>
            <p className="post-excerpt">
              Рассматриваем факторы, которые следует учитывать при выборе технологий для вашего стартапа, и анализируем популярные стеки для различных типов проектов.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
        
        {/* Статья 5 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Веб-разработка</span>
            <h3>GraphQL vs REST: когда и что использовать</h3>
            <div className="post-meta">
              <span className="post-date">15 декабря 2022</span>
              <span className="post-author">Автор: Павел Иванов</span>
            </div>
            <p className="post-excerpt">
              Сравниваем два популярных подхода к построению API, их преимущества, недостатки и сценарии использования на реальных примерах.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
        
        {/* Статья 6 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Дизайн</span>
            <h3>Микроанимации в интерфейсах: как улучшить пользовательский опыт</h3>
            <div className="post-meta">
              <span className="post-date">10 декабря 2022</span>
              <span className="post-author">Автор: Наталья Кузнецова</span>
            </div>
            <p className="post-excerpt">
              Рассказываем о роли микроанимаций в современных интерфейсах, принципах их создания и инструментах для реализации.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
        
        {/* Статья 7 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Технологии</span>
            <h3>Машинное обучение в браузере с TensorFlow.js</h3>
            <div className="post-meta">
              <span className="post-date">5 декабря 2022</span>
              <span className="post-author">Автор: Артем Соколов</span>
            </div>
            <p className="post-excerpt">
              Изучаем возможности TensorFlow.js для внедрения моделей машинного обучения в веб-приложения без необходимости серверной обработки.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
        
        {/* Статья 8 */}
        <div className="blog-post">
          <div className="post-image">
            <div className="image-placeholder">Изображение статьи</div>
          </div>
          <div className="post-content">
            <span className="post-category">Бизнес</span>
            <h3>Удаленная работа в IT: как построить эффективные процессы</h3>
            <div className="post-meta">
              <span className="post-date">1 декабря 2022</span>
              <span className="post-author">Автор: Ольга Белова</span>
            </div>
            <p className="post-excerpt">
              Делимся опытом организации удаленной работы в IT-команде, инструментами для коммуникации и управления проектами, а также советами по поддержанию продуктивности.
            </p>
            <a href="#" className="read-more">Читать далее</a>
          </div>
        </div>
      </div>
      
      <div className="pagination">
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">4</button>
        <button className="pagination-btn">5</button>
        <span className="pagination-ellipsis">...</span>
        <button className="pagination-btn">10</button>
      </div>
      
      <div className="newsletter">
        <h2>Подпишитесь на нашу рассылку</h2>
        <p>Получайте новые статьи и обновления прямо на вашу почту</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Ваш email" required />
          <button type="submit">Подписаться</button>
        </form>
      </div>
    </div>
  );
};

export default Blog; 