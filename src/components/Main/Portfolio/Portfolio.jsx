import "./Portfolio.css";
import { memo } from "react";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="list portfolio__flexbox">
        <li>
          <a href="https://github.com/Lizaakishina/how-to-learn" className="link portfolio__webSite" target="blank">
            <h3 className="portfolio__webSite-title">Статичный сайт</h3>
            <div className="portfolio__webSite-arrow">↗</div>
          </a>
        </li>
        <li className="portfolio__line"></li>
        <li>
          <a href="https://github.com/Lizaakishina/russian-travel" className="link portfolio__webSite" target="blank">
            <h3 className="portfolio__webSite-title">Адаптивный сайт</h3>
            <div className="portfolio__webSite-arrow">↗</div>
          </a>
        </li>
        <li className="portfolio__line"></li>
        <li>
          <a href="https://github.com/Lizaakishina/react-mesto-api-full" className="link portfolio__webSite" target="blank">
            <h3 className="portfolio__webSite-title">Одностраничное приложение</h3>
            <div className="portfolio__webSite-arrow">↗</div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default memo(Portfolio);