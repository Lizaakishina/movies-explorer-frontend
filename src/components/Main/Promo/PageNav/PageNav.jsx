import "./PageNav.css";

const NavTab = () => {
  return (
    <section className="pageNav">
      <a href="#aboutProject" className="link pageNav__item">О проекте</a>
      <a href="#techs" className="link pageNav__item">Технологии</a>
      <a href="#aboutMe" className="link pageNav__item">Студент</a>
    </section>
  )
}

export default NavTab;