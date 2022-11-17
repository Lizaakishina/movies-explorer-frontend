import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "./Profile.css";

const Profile = () => {
  const name = "Елизавета";
  const email = "pochta@yandex.ru"
  return (
    <>
      <ProfileHeader />
      <section className="profile">
        <h2 className="profile__title">Привет, {name}!</h2>
        <div className="profile__container">
          <div className="profile__flex">
            <p className="profile__text">Имя</p>
            <p className="profile__data">{name}</p>
          </div>
          <div className="profile__line"></div>
          <div className="profile__flex">
            <p className="profile__text">E-mail</p>
            <p className="profile__data">{email}</p>
          </div>
        </div>
        <button type="button" className="button profile__edit">Редактировать</button>
        <button type="button" className="button profile__exit">Выйти из аккаунта</button>
      </section>
    </>
  )
}

export default Profile;