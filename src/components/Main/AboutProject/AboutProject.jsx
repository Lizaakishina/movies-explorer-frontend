import Title from "../../Title/Title";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="aboutProject" id="aboutProject">
      <Title title = "О проекте"/>
      <ul className="list aboutProject__list">
        <li className="aboutProject__item">
          <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="aboutProject__item">
          <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;