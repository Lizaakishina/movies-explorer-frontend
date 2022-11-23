import Header from "../Header/Header";
import "./Profile.css";

const Profile = () => {
  const name = "Елизавета";
  const email = "pochta@yandex.ru"
  return (
    <>
      <Header logIn={true}/>
      <main>
        <section className="profile">
          <h2 className="profile__hello">Привет, {name}!</h2>
          <div className="profile__container">
            <div className="profile__flexbox">
              <p className="profile__text">Имя</p>
              <p className="profile__data">{name}</p>
            </div>
            <div className="profile__line"></div>
            <div className="profile__flexbox">
              <p className="profile__text">E-mail</p>
              <p className="profile__data">{email}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile;