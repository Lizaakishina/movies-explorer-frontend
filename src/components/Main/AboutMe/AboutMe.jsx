import Title from "../../Title/Title";
import "./AboutMe.css";
import { memo } from "react";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <Title title = "Студент"/>
      <ul className="list aboutMe__container">
        <li className="aboutMe__item">
          <div className="aboutMe__flexbox">
            <h3 className="aboutMe__name">Елизавета</h3>
            <h4 className="aboutMe__status">Фронтенд-разработчик, 19 лет</h4>
            <p className="aboutMe__description">
              Я родилась и живу в Туле, учусь на факультете ИУК КФ МГТУ им Н.Э.Баумана. 
              Я люблю слушать музыку, а ещё увлекаюсь спортом. 
              Недавно начала кодить. 
              После того, как прошла курс по веб&#8209;разработке, 
              начала заниматься фриланс&#8209;заказами.
            </p>
          </div>
          <a className="link aboutMe__link" href="https://github.com/Lizaakishina" target="blank">Github</a>
        </li>
        <li className="aboutMe__item">
          <div className="aboutMe__image"></div>
        </li>
      </ul>
    </section>
  )
}

export default memo(AboutMe);